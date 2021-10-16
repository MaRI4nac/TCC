import { Container } from './styled'
import { Table_header, Table_content } from './table'
import { ButtonLeftImage } from './buttons'

export default function Crud() {
    const i = 5;

    return (
        <Container>
            <h1> GERENCIADOR DE EVENTOS </h1>
            <div className="inputs">
                <div className="agp-input">
                    <input placeholder="Filtrar por Nome" />
                    <input placeholder="Filtro por categoria" />
                </div>
                <ButtonLeftImage texto="Novo Evento" imagem="assets/images/acao_novoEvento.png" />
            </div>   
            <table>
                <Table_header titulo1="Evento" titulo2="Categoria" titulo3="Ações"/>
                <Table_content
                    campo1="peter pan, o viado,
                    peter pan, o viado,
                    peter pan, o viado,
                    "
                    campo2="ação/aventura"
                    usuario = {false}
                />
            </table>
        </Container>        
    )
}