import BoxCalculator from "./box-calculator";
import { FaixaUm } from "./styled";
import { Botao } from '../../../../components/botoes/styled'

export default function BuyFirstBand (props) {

    const alterarQtd = (qtd) => {
        props.onUpdate(qtd);
    }

    const onTicketUpdate = (op) => {
        props.onValueChange(op)
    }
    
    console.log(props.imagemfundo)

    return (
        <FaixaUm background={props.imagemfundo}>
            <div class="the-event">
                <div class="image">
                    <img src={props.imagemcapa} alt="" width= "600em" height="320em" />
                </div>
            </div>
            <div class="the-qtd">
                <BoxCalculator onChange={alterarQtd} value={props.value} onTicketUpdate={onTicketUpdate} ticketValue={props.ticketValue}/>
            </div>
            <div class="the-button">
                <Botao> Prosseguir </Botao>
            </div>
        </FaixaUm>
    )
}