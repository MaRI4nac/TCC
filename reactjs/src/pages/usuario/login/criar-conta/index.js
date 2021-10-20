import { Botao } from "../../../../components/botoes/styled"
import { CriarConta } from "./styled"
import { useHistory } from "react-router-dom"
import Api from "../../../../service/api"
import { useEffect, useState } from "react";
const api = new Api();

export default function NWSCriarConta () {
    const [nmUsu, setNmUsu] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [senha, setSenha] = useState();
    const [nascimento, setNascimento] = useState();

    const [senha1, setSenha1] = useState();
    const [senha2, setSenha2] = useState();

    const navigation = useHistory();

    const createUser = async() => {
        if(senha1 == senha2) 
            setSenha(senha1);
        else {
            alert();
            return;
        }
        let r = await api.usuarioCreate(nmUsu, cpf, email, username, senha, nascimento);
        if (!validarResposta(r)) 
            return;
        
        navigation.push('/logar');
    }

    const validarResposta = (resp) => {
        if (!resp.erro)
            return true
        alert(resp.erro)
        return false
    }

    useEffect(() => {
        console.log(nascimento)
    }, [nascimento])

    return (
        <CriarConta>
            <div class="cadast-logo">
                <div class="tela-cadastrese">
                    <div class="cadast-titulo"> Cadastre-se </div>
                    <div class="cadast-form">
                        <input type="text" placeholder="Nome Completo" onChange={e => setNmUsu(e.target.value)}/>
                        <input type="text" placeholder="CPF" onChange={e => setCpf(e.target.value)}/>
                        <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                        <input type="text" placeholder="Senha" onChange={e => setSenha1(e.target.value)} />
                        <input type="text" placeholder="Senha (confirmação)" onChange={e => setSenha2(e.target.value)} />
                        <input type="date" name="" id="" onChange={e => setNascimento(e.target.value)}/>
                    </div>
                    <div class="cadast-bt">
                    <div className="Blink" onClick={() => createUser()} > <Botao> Criar conta </Botao> </div>
                    </div>
                </div>
            </div>
        </CriarConta>
    )
}