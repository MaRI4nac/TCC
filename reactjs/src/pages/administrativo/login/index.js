import { ADMLog } from "./styled"
import { Botao } from "../../../components/botoes/styled"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import Api from "../../../service/apiAdmGeneral"
import Cookies from 'js-cookie'
import { Validador } from "../../../components/commum"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'
import { useRef } from "react";

const api = new Api()

export default function ADMLogin () {
    const ref = useRef(null);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const nav = useHistory();

    if (Cookies.get('usuario-logado') != null && Cookies.get('usuario-logado') != undefined)     {
        let user = JSON.parse(Cookies.get('usuario-logado'))
        if (user.bt_adm == true) {
            nav.push('/admprincipal')
        }
    }

    const loginAdmin = async () => {
        let r = await api.loginAdm(username, password)
        if (!Validador(r))
            return;

        if (Cookies.get('usuario-logado') != null) {
            toast("Deslogue antes de entrar como administrador");
            return nav.push('/inicial')
        }

        Cookies.set('usuario-logado', JSON.stringify(r));
        nav.push('/admprincipal')
    }

    return (
        <ADMLog>
        <ToastContainer> </ToastContainer>
        <LoadingBar color='#13A06F' ref={ref} />
         <div className = "Logo"> 
            <div class="tela-login">
                <div class="log-titulo"> Administrador </div>
                <div class="log-digit">
                    <div class="log-inputs">
                        <input type="text" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
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
