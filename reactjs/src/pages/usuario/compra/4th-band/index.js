import PreviaBox from "./previa-box";
import { FaixaQuatro } from "./styled";
import { Botao } from '../../../../components/botoes/styled'


export default function BuyFourthBand () {
    return (
        <FaixaQuatro>
            <div class="title"> Prévia </div>
            <div class="band-previa">
                <PreviaBox />
                <PreviaBox />
                <PreviaBox />
                <div class="the-button"> <Botao> ADQUIRIR INGRESSO (S) </Botao> </div>
            </div>
        </FaixaQuatro>
    )
}