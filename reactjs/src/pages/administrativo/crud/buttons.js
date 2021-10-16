import { Container } from './buttonsStyled'


function ButtonRightImage(props) {
    return (
        <Container>
            <div> {props.texto} </div>
            <img src={props.imagem}/>
        </Container>
    )
}

function ButtonLeftImage(props) {
    return (
        <Container>
            <img className="leftBox" src={props.imagem} />
            <div> {props.texto} </div>
        </Container>
    )
}

function ButtonNoImage(props) {
    return (
        <Container>
            <div> {props.texto} </div>
        </Container>
    )
}

export { ButtonLeftImage, ButtonRightImage, ButtonNoImage }
