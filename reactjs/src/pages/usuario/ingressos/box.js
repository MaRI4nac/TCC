import { Container } from './box-styled'


export default function Box (props) {
    return (
        <Container background={props.imgFundo}>
            <div className="box">
                <div className="bg"> </div>
                <img src="/assets/images/ingresso.png" alt="" />    
                <div className="box-textos"> 
                    <h1> {props.titulo} </h1>
                    <div> <b> Local: </b> {props.local} </div>
                    <div> <b> Dia: </b> SEGUNDA, 22/11/2021 </div>
                    <div> <b> Evento: </b> {props.tema} </div>
                    <div> <b> Situação: </b> {props.situacao} </div>
                </div>
            </div>
        </Container>
    )
}