import { Container } from './styled'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useState } from 'react';


export default function Cabecalho(props) {

    const [search, setSearch] = useState();
    const navig = useHistory();

    function keyPress(event) {

        if(event.charCode === 13) {
            navig.push(`/buscadireta?search=${search}`);
        }
    }

    return (
        <Container>
            <Link to="/inicial"> <img className="logo-image" src="/assets/images/LOGO1 TCC.png" alt="" /> </Link>
            <input type="text" placeholder="Buscar eventos..." value={search} onChange={ e => setSearch(e.target.value) } onKeyPress={keyPress} />
            <Link to="/profile"> <img className="perfil-image" src="/assets/images/Perfil-cabecalho.png" alt="" /> </Link>
        </Container>
    )
}


