import { Log } from "./styled"
import { Botao } from "../../../../components/botoes/styled"
import { Link } from "react-router-dom"

export default function NWSLogar () {
    return (
        <Log>
           <div className="Logo"> 
             <div class="tela-login">
                <div class="log-titulo"> Faça seu Login! </div>
                <div class="log-digit">
                    <div class="log-inputs">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Senha" />
                    </div>
                    <Link to="/esqueceusenha" className="Glink" > <div class="log-esqueci-senha"> Esqueci minha senha </div> </Link>
                </div>
                <div class="log-botoes">
                    <div class="log-nao-tem-conta">Não tem uma conta? Crie aqui!</div>
                    <div class="log-bot-bot">
                        <Link to="/criarconta" className="Wlink"> <Botao> Criar Conta </Botao> </Link>
                        <Link to="/inicial" className="Wlink"> <Botao> Entrar </Botao> </Link>
                    </div>  
                </div>
             </div>
         </div>
    </Log>
    )
}