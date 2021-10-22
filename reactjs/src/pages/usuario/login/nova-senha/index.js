import { Container, Button } from './styled.js'
import { Link } from 'react-router-dom'

export default function NewPassoword () {
    return (
        <Container> 
            <div className = "Box-password"> 
                <div className = "Title"> Nova Senha </div>
                <div className = "Inputs"> 
                    <input type="password" placeholder="Código"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Senha (confirmação)"/>
                </div>
                <div className = "Warning">
                    <input type = "checkbox"/>
                    <label> Mantenha-me conectado nos dispositivos logados </label> 
                </div> 
                 <Link to="/logar"> <Button> Alterar Senha </Button> </Link>
            </div> 
        </Container>

    )
}