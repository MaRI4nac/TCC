import { Log } from "./styled"
import { Botao } from "../../../../components/botoes/styled"
import { Link, useHistory } from "react-router-dom"
import Api from '../../../../service/apiUsers'
import { useState, useRef } from "react";
import Cookies from 'js-cookie'
import { Validador } from "../../../../components/commum";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

const api = new Api();


export default function NWSLogar () {
    const ref = useRef(null);
    const customId = "custom-id-yes";

    const [mail, setMail] = useState();
    const [senha, setSenha] = useState();
    const navigation = useHistory();

    if(Cookies.get('usuario-logado') != null) {
        
        toast.dark('😅 Você já está logado', {
            toastId: customId
        });

        navigation.push('/');
    }

    const logarUsuario = async() => {
        ref.current.continuousStart();
        let r = await api.userLogin(mail, senha);
        if(!Validador(r)) {
            return ref.current.complete();
        }

        Cookies.set('usuario-logado', JSON.stringify(r));
        toast.dark('😀 Logado com sucesso!');
        ref.current.complete();

        navigation.push('/');
    }

    return (
        <Log>
            <ToastContainer> </ToastContainer>
            <LoadingBar color='#13A06F' ref={ref} />
           <div className="Logo"> 
             <div class="tela-login">
                <div class="log-titulo"> Faça seu Login! </div>
                <div class="log-digit">
                    <div class="log-inputs">
                        <input type="text" placeholder="Email" onChange={e => setMail(e.target.value)}/>
                        <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <Link to="/esqueceusenha" className="Glink" > <div class="log-esqueci-senha"> Esqueci minha senha </div> </Link>
                </div>
                <div class="log-botoes">
                    <div class="log-nao-tem-conta">Não tem uma conta? Crie aqui!</div>
                    <div class="log-bot-bot">
                        <Link to="/criarconta" className="Wlink"> <Botao> Criar Conta </Botao> </Link>
                        <div className="Wlink" onClick={() => logarUsuario()}> <Botao> Entrar </Botao> </div>
                    </div>  
                </div>
             </div>
         </div>
    </Log>
    )
}