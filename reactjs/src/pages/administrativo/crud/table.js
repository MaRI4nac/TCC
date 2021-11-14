
import { Container } from './tableStyled'
import { ButtonRightImage, ButtonNoImage } from './buttons'

export function Table_header(props) {
    return (
        <Container>
            <th> <h1> {props.titulo1} </h1> </th>
            <th> <h1> {props.titulo2} </h1> </th>
            <th> <h1> {props.titulo3} </h1> </th>
            <th> <h1> {props.titulo4} </h1> </th>
            <th> <h1> {props.titulo5} </h1> </th>
        </Container> 
    )
}

export function Table_content(props) {
    return (
         <Container>
                <td> {props.campo1} </td>
                <td> {props.campo2} </td>
                <td> {props.campo3} </td>
                <td> {props.campo4} </td>
        </Container>
    )
}

export function Table_content2(props) {
    return (
         <Container>
                <td> {props.campo1} </td>
                <td> {props.campo2} </td>
            
                <td className="flex-row"> 
                    <ButtonRightImage texto="Ver" imagem="assets/images/acao_ver.png" />
                    <ButtonRightImage texto="Alterar" imagem="assets/images/acao_alterar.png" />
                    <ButtonRightImage texto="Excluir" imagem="assets/images/acao_remover.png" />
                </td>
        </Container>
    )
}