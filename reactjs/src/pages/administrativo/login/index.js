import { ADMLog } from "./styled"
import { Botao } from "../../../components/botoes/styled"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import Api from "../../../service/apiAdmGeneral"
import Cookies from 'js-cookie'
import { Validador } from "../../../components/commum"

const api = new Api()

export default function ADMLogin () {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const nav = useHistory();

    const loginAdmin = async () => {
        let r = await api.loginAdm(username, password)
        if (!Validador(r))
            return;

        if (Cookies.get('usuario-logado') != null) {
            alert("Deslogue antes de entrar como administrador");
            return nav.push('/inicial')
        }

        Cookies.set('usuario-logado', JSON.stringify(r));
        nav.push('/admprincipal')
    }

    return (
        <ADMLog>
         <div className = "Logo"> 
            <div class="tela-login">
                <div class="log-titulo"> Administrador </div>
                <div class="log-digit">
                    <div class="log-inputs">
                        <input type="text" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)}/>
                        <input type="text" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                    <div class="log-bot-bot">
                        <Botao class="log-criar-conta" onClick={() => loginAdmin()}> Entrar </Botao> 
                    </div>
            </div>
        </div>
    </ADMLog>
    )
}
