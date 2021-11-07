import Cookies from "js-cookie";
import { Botao } from "../../../components/botoes/styled";
import { ITsProfile } from "./styled";
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import AgpInputs from "./components";
import Api from "../../../service/apiUsers";
import { Validador } from '../../../components/commum/index'
import Cabecalho from "../../../components/cabecalho";

const api = new Api()

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado == null) {
        navigation.push('/inicial')
        return null;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado; 
}

export default function UserProfile () {
    const nav = useHistory();

    const usuarioLogado = lerUsuarioLogado(nav) || {};

    const [usuario, setUsuario] = useState(usuarioLogado);

    const [teste, setTeste123] = useState(JSON.parse(Cookies.get('usuario-logado')))

    const [nmUsu, setNmUsu] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [nascimentoup, setNascimentoup] = useState('');
    const [imagem, setImagem] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    const deslogar = () => {
        Cookies.remove('usuario-logado');
        nav.push('/inicial')
    }

    const updateCookie = async () => {
        let r = await api.userLogin(usuario.ds_email, usuario.ds_senha) 
        if (!Validador(r))
            return;
        
        Cookies.set('usuario-logado', JSON.parse(r));
    }

    const updateUsu = async () => {
        if (idAlterando != 0) { 
            let r = await api.userUpdate(nmUsu, cpf, email, username, senha, nascimentoup, imagem, usuario.id_usuario)
            if (!Validador(r))
                return;

            limparCampos()
            updateCookie();
        }
        else if (idAlterando == 0) {
            setNmUsu(usuario.nm_usuario)
            setCpf(usuario.ds_cpf)
            setEmail(usuario.ds_email)
            setUsername(usuario.ds_username)
            setSenha(usuario.ds_senha)
            setNascimentoup(usuario.dt_nascimento)
            setImagem(usuario.img_perfil)
            setIdAlterando(usuario.id_usuario)
        }
    }

    const limparCampos = () => {    
        setNmUsu('')
        setCpf('')
        setEmail('')
        setUsername('')
        setSenha('')
        setNascimentoup('')
        setImagem('')

        setIdAlterando(0)
    }

    useEffect(() => {
        console.log(usuario.dt_nascimento)
    }, [usuario])


    let nascimento = usuario.dt_nascimento.split('-')

    return (
        <ITsProfile>
            <Cabecalho />
            <div class="header"></div>
            <div class="the-band">
                <div class="user-image"> <img src={usuario.img_perfil} alt="" width="250px" height="250px" /> </div>
                <div class="user-general-informations">
                    <div class="first-box">
                        <div class="profile-user"> {usuario.nm_usuario} </div>
                        <div class="profile-user"> @{usuario.ds_username} </div>
                    </div>
                    <div class="second-box">
                        
                        {idAlterando == 0 ? 
                        <div> 
                            <div class="information"> 
                                <div className="agp-flexcolumn"> <b> Data de nascimento: </b> </div>
                                <div className="agp-flexcolumn"> {nascimento[2]}/{nascimento[1]}/{nascimento[0]} </div>
                            </div>
                            <div class="information"> 
                                <div className="agp-flexcolumn"> <b> E-mail: </b> </div>
                                <div className="agp-flexcolumn"> {usuario.ds_email} </div>
                            </div>
                        </div>
                        : <div> 
                            <AgpInputs label="Nome:" type="text" value={nmUsu} onChange={(e) => setNmUsu(e.target.value)}/>
                            <AgpInputs label="CPF:" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                            <AgpInputs label="E-mail:" type="text" value={email} oonChange={(e) => setEmail(e.target.value)}/>
                            <AgpInputs label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <AgpInputs label="Senha:" type="text"value={senha} onChange={(e) => setSenha(e.target.value)}/>
                            <AgpInputs label="Nascimento:" type="date" value={nascimentoup} onChange={(e) => setNascimentoup(e.target.value)}/>
                            <AgpInputs label="Imagem:" type="text" value={imagem} onChange={(e) => setImagem(e.target.value)}/>
                        </div>
                       }
                       
                    

                    </div>

                    <div class="butbutbut">
                        <Botao onClick={() => updateUsu()}> {idAlterando == 0 ? "Alterar Informações" : "Confirmar Alterações"} </Botao>
                    </div>
                    <div className="butbutbut"> <Botao onClick={() => deslogar()}> Log off </Botao></div>
                    
                </div>
            </div>
        </ITsProfile>
    )
}