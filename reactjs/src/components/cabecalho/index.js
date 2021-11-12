import { Container } from './styled'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado; 
}

export default function Cabecalho(props) {
    const ref = useRef(null);

    const navig = useHistory();
    const usuarioLogado = lerUsuarioLogado(navig);
    const [user, setUser] = useState(usuarioLogado);


    const [search, setSearch] = useState();

    const doTheSeatch = () => {
        navig.push(`/buscadireta?search=${search}`);
    }
   
    function keyPress(event) {
        if(event.charCode === 13) {
            doTheSeatch();
        }
    }

    const goToLogin = () => {
        ref.current.continuousStart();
        navig.push('/logar')
        ref.current.complete();
    }


    return (

        <Container>
            <ToastContainer> </ToastContainer>
            <LoadingBar color='#f11946' ref={ref} />
            <Link to="/"> <img className="logo-image" src="/assets/images/LOGO1 TCC.png" alt="" /> </Link>
            <input type="text" placeholder="Buscar eventos..." value={search} onChange={(e) => setSearch(e.target.value) } onKeyPress={keyPress} />
            {user == false
                ? <div className="no-decoration" onClick={goToLogin}> <div> Entrar </div> </div>
                : <Link to="/profile"> <img className="perfil-image" src={user.img_perfil} alt="" /> </Link>
            } 
        </Container>
    )
}


