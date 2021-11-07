import { Container } from './styled'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


export default function Cabecalho(props) {

    const [search, setSearch] = useState();
    const navig = useHistory();
    const [user, setUser] = useState(JSON.parse(Cookies.get('usuario-logado')));

    function keyPress(event) {

        if(event.charCode === 13) {
            navig.push(`/buscadireta?search=${search}`);
        }
    }

    return (
        <Container>
            <Link to="/inicial"> <img className="logo-image" src="/assets/images/LOGO1 TCC.png" alt="" /> </Link>
            <input type="text" placeholder="Buscar eventos..." value={search} onChange={ e => setSearch(e.target.value) } onKeyPress={keyPress} />
            {/* {!Cookies.get('usuario-logado') 
                ? <Link to="/logar" className="no-decoration"> <div> Entrar </div> </Link> 
                : <Link to="/profile"> <img className="perfil-image" src={user.img_perfil} alt="" /> </Link>
            }  */}
        </Container>
    )
}


