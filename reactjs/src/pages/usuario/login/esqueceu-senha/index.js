
import { Botao } from '../../../../components/botoes/styled';
import {Container } from './styled';
import { Link, useHistory } from 'react-router-dom';
import Api from '../../../../service/api';
import { useState } from 'react';
import { Validador } from '../../../../components/commum';

const api = new Api();

export default function ForgotPassword () {
    const [mail, setMail] = useState();
    const nav = useHistory();

    const sendCode = async() => {
        let r = await api.userForgotPassword(mail);
        if (!Validador(r)) 
            return;
        
        nav.push('/novasenha', {mail: mail})
    }


    return (
        <Container> 
            <div className = "Box-forgotPass">
                <div className = "Title"> Esqueceu a senha? </div> 
                <div className = "Text"> 
                    Digite aqui seu e-mail para fazermos a confirmação de sua conta para que possa alterar sua senha. 
                    Enviaremos em seu e-mail um link que te redirecionará para uma nova tela para que altere sua senha. 
                </div> 
                <div className = "E-mail"> 
                    <input type = "text" placeholder = "E-mail" onChange={e => setMail(e.target.value)}/> 
                </div>

                <div className = "Button">
                <div className="Blink" onClick={() => sendCode()}> <Botao>  Gerar Link </Botao> </div>
                </div> 
            </div>
        </Container>

    )
} 