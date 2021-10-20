import { Log } from "./styled"
import { Botao } from "../../../../components/botoes/styled"
import { Link, useHistory } from "react-router-dom"
import Api from '../../../../service/api'
import { useState } from "react";
import Cookies from 'js-cookie'

const api = new Api();

export default function NWSLogar () {
    const [username, setUsername] = useState();
    const [senha, setSenha] = useState();
    const navigation = useHistory();

    // if(Cookies.get('usuario-logado') != null) {
    //     navigation.push('/inicial')
    // }

    const logarUsuario = async() => {
        let r = await api.usuarioLogin(username, senha);
        console.log(r)
        if(!validarResposta(r))
            return;

        Cookies.set('usuario-logado', JSON.stringify(r));
        navigation.push('/inicial')
    }

    const validarResposta = (resp) => {
        if (!resp.erro)
            return true
        alert(resp.erro)
        return false
    }

    return (
        <Log>
           <div className="Logo"> 
             <div class="tela-login">
                <div class="log-titulo"> Faça seu Login! </div>
                <div class="log-digit">
                    <div class="log-inputs">
                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                        <input type="text" placeholder="Senha" onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <Link to="/esqueceusenha" className="Glink" > <div class="log-esqueci-senha"> Esqueci minha senha </div> </Link>
                </div>
                <div class="log-botoes">
                    <div class="log-nao-tem-conta">Não tem uma conta? Crie aqui!</div>
                    <div class="log-bot-bot">
                        <Link to="/criarconta" className="Wlink"> <Botao> Criar Conta </Botao> </Link>
                        <div className="Wlink" onClick={() => logarUsuario()}> <Botao> Entrar </Botao> </div>
                    </div>  
                </div>
             </div>
         </div>
    </Log>
    )
}