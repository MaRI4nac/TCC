import { Container } from './styled'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    console.log(logado)
    if (!logado) {
        return false;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado; 
}

export default function Cabecalho(props) {
    
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

    return (

        <Container>
            <Link to="/"> <img className="logo-image" src="/assets/images/LOGO1 TCC.png" alt="" /> </Link>
            <input type="text" placeholder="Buscar eventos..." value={search} onChange={(e) => setSearch(e.target.value) } onKeyPress={keyPress} />
            {user == false
                ? <Link to="/logar" className="no-decoration"> <div> Entrar </div> </Link>
                : <Link to="/profile"> <img className="perfil-image" src={user.img_perfil} alt="" /> </Link>
            } 
        </Container>
    )
}


