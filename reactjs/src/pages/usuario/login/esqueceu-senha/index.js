
import { Botao } from '../../../../components/botoes/styled';
import {Container } from './styled';
import { Link } from 'react-router-dom';

export default function ForgotPassword () {
    return (
        <Container> 
            <div className = "Box-forgotPass">
                <div className = "Title"> Esqueceu a senha? </div> 
                <div className = "Text"> 
                    Digite aqui seu e-mail para fazermos a confirmação de sua conta para que possa alterar sua senha. 
                    Enviaremos em seu e-mail um link que te redirecionará para uma nova tela para que altere sua senha. 
                </div> 
                <div className = "E-mail"> 
                    <input type = "text" placeholder = "E-mail" /> 
                </div>

                <div className = "Button">
                <Link to="/novasenha" className="Blink"> <Botao>  Gerar Link </Botao> </Link>
                </div> 
            </div>
        </Container>

    )
} 