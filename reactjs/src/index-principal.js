import Routes from "./routes";
import { Link } from "react-router-dom";
import './index.css'
import { Botao } from "./components/botoes/styled";

export default function SiteCompleto () {
    return (
        <div className="organizacao-principal">
            <Botao className="idai"> <Link to="/logar"> Login (Usuário) </Link> </Botao>
            <Botao className="idai"> <Link to="/admlogin"> ADM Login </Link> </Botao>
            <Botao className="idai"> <Link to ="/inicial"> Tela inicial </Link></Botao> 
        </div>
    )
}