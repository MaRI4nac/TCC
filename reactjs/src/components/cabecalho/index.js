import { Container } from './styled'
import { Link } from 'react-router-dom'


export default function Cabecalho() {
    return (
        <Container>
            <img className="logo-image" src="/assets/images/LOGO1 TCC.png" alt="" />
            <input type="text" placeholder="Buscar eventos..."/>
            <Link to="/profile"> <img className="perfil-image" src="/assets/images/Perfil-cabecalho.png" alt="" /> </Link>
        </Container>
    )
}