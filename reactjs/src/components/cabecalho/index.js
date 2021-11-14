import { Container } from './styled'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useEffect, useState, useRef } from 'react';
import Cookies, { get } from 'js-cookie';

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
        navig.push('/logar')
    }

    const getImage = () => {
        if (user.img_perfil == null) {
            return;
        }

        if(user.img_perfil.startsWith('uploads')) {
            return `http://localhost:3030/user/image?imagem=${user.img_perfil}`;
        } else {
            return user.img_perfil;
        }
    }

    return (

        <Container>
            <Link to="/"> <img className="logo-image" src="/assets/images/LOGO1 TCC.png" alt="" /> </Link>
            <input type="text" placeholder="Buscar eventos..." value={search} onChange={(e) => setSearch(e.target.value) } onKeyPress={keyPress} />
            {user == false
                ? <div className="no-decoration" onClick={goToLogin}> <div> Entrar </div> </div>
                : <Link to="/profile"> <img className="perfil-image" src={getImage()} alt="" /> </Link>
            } 
        </Container>
    )
}


