import { Container, Button } from './styled.js'
import { Link } from 'react-router-dom'

import Api from '../../../../service/api.js'
import { useState } from 'react';
import { Validador } from '../../../../components/commum/index.js';
import { useHistory } from 'react-router';

const api = new Api();

export default function NewPassoword (props) {
    const [codigo, setCodigo] = useState();
    const [senha, setSenha] = useState();

    const [senha1, setSenha1] = useState();
    const [senha2, setSenha2] = useState();

    const nav = useHistory();

    const updatePassword = async() => {
        console.log( props.location.state.mail)
        if(senha1 == senha2) 
            setSenha(senha1);
        else {
            alert();
            return;
        }

        let r = await api.userChangePassword(codigo, props.location.state.mail, setCodigo(senha))
        if (!Validador(r))
            return;

        nav.push('/logar')
    }

    return (
        <Container> 
            <div className = "Box-password"> 
                <div className = "Title"> Nova Senha </div>
                <div className = "Inputs"> 
                    <div> Um código foi enviado no email: *******@gmail.com </div> 
                    <div> insira-o junto da nova senha </div>
                    <input type="password" placeholder="Código" onChange={e => setCodigo(e.target.value)}/>
                    <input type="password" placeholder="Senha" onChange={e => setSenha1(e.target.value)}/>
                    <input type="password" placeholder="Senha (confirmação)" onChange={e => setSenha2(e.target.value)}/>
                </div>
                <div className = "Warning">
                    <input type = "checkbox"/>
                    <label> Mantenha-me conectado nos dispositivos logados </label> 
                </div> 
                <div onClick={() => updatePassword()}> <Button> Alterar Senha </Button> </div>
            </div> 
        </Container>

    )
}