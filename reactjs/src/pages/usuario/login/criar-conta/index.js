import { Botao } from "../../../../components/botoes/styled"
import { CriarConta } from "./styled"
import { Link } from "react-router-dom"

export default function NWSCriarConta () {
    return (
        <CriarConta>
        <div class="cadast-logo">
            <div class="tela-cadastrese">
                <div class="cadast-titulo"> Cadastre-se </div>
                <div class="cadast-form">
                    <input type="text" placeholder="Nome Completo"/>
                    <input type="text" placeholder="CPF"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Senha"/>
                    <input type="text" placeholder="Senha (confirmação)"/>
                    <input type="date" name="" id=""/>
                </div>
                <div class="cadast-bt">
                   <Link to="/logar" className="Blink"> <Botao> Criar conta </Botao> </Link>
                </div>
            </div>
        </div>
    </CriarConta>
    )
}