import { Table_header, Table_content } from '../crud/table'
import { Container } from './styled'


export default function GestaoUsuario() {
    return (
        <Container>
            <h1> Usuários </h1>
            <button className="filter"> 
                <div> Listar em ordem alfabetica  </div>
                <img src="/assets/images/userArrow.png" alt="" />
            </button>
            <table>
                <Table_header titulo1 ="Usuário" titulo2="Email"/>
                <Table_content campo1= "@IMTHEROSE" campo2 ="EMMAINTHERAIN@GMAIL.COM" usuario={true} />
            </table>
        </Container>
    )
}