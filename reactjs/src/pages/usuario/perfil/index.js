import Cookies from "js-cookie";
import { Botao } from "../../../components/botoes/styled";
import { ITsProfile } from "./styled";
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado == null) {
        navigation.push('/inicial')
        return null;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado; 
}

export default function UserProfile () {
    const nav = useHistory();

    const usuarioLogado = lerUsuarioLogado(nav) || {};

    const [usuario, setUsuario] = useState(usuarioLogado);

    const deslogar = () => {
        Cookies.remove('usuario-logado');
        nav.push('/inicial')
    }

    // useEffect(() => {
    //     setUsuario()
    // })

    return (
        <ITsProfile>
            {console.log(usuario)}
            <div class="header"></div>
            <div class="the-band">
                <div class="user-image"> <img src={usuario.img_perfil} alt="" width="250px" height="250px" /> </div>
                <div class="user-general-informations">
                    <div class="first-box">
                        <div class="profile-user"> @{usuario.ds_username} </div>
                    </div>
                    <div class="second-box">
                        <div class="information"> <b> Nome: </b> {usuario.nm_usuario} </div>
                        <div class="information"> <b> Data de nascimento: </b> {usuario.dt_nascimento} </div>
                        <div class="information"> <b> E-mail: </b> {usuario.ds_email} </div>
                        <div class="information"> <b> Senha: </b> ********** </div>
                    </div>

                    <div class="butbutbut">
                        <Botao> Alterar Informações </Botao>
                    </div>
                    <div className="butbutbut"> <Botao onClick={() => deslogar()}> Log off </Botao></div>
                    
                </div>
            </div>
        </ITsProfile>
    )
}