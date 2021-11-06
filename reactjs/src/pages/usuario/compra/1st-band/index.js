import BoxCalculator from "./box-calculator";
import { FaixaUm } from "./styled";
import { Botao } from '../../../../components/botoes/styled'

export default function BuyFirstBand (props) {

    const alterarQtd = (qtd) => {
        props.onUpdate(qtd);
    }

    return (
        <FaixaUm>
            <div class="the-event">
                <div class="image">
                    <img src="/assets/images/event-block.png" alt="" width= "600em" height="320em" />
                </div>
            </div>
            <div class="the-qtd">
                <BoxCalculator onChange={alterarQtd} value={props.value}/>
            </div>
            <div class="the-button">
                <Botao> Prosseguir </Botao>
            </div>
        </FaixaUm>
    )
}