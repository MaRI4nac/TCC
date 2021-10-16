import { ADMLog } from "./styled"
import { Botao } from "../../../components/botoes/styled"
import { Link } from "react-router-dom"

export default function ADMLogin () {
    return (
        <ADMLog>
        <div class="tela-login">
            <div class="log-titulo"> Administrador </div>
            <div class="log-digit">
                <div class="log-inputs">
                    <input type="text" placeholder="Usuário" />
                    <input type="text" placeholder="Senha" />
                </div>
            </div>
                <div class="log-bot-bot">
                    <Link to="/admprincipal" className="Blink"> <Botao class="log-criar-conta"> Entrar </Botao> </Link>
                </div>
        </div>
    </ADMLog>
    )
}