import BoxCalculator from "./box-calculator";
import { FaixaUm } from "./styled";
import { Botao } from '../../../../components/botoes/styled'
import { useHistory } from "react-router";
import Cookies from "js-cookie";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'
import { useRef } from "react";

export default function BuyFirstBand (props) {
    const ref = useRef(null);

    const alterarQtd = (qtd) => {
        props.onUpdate(qtd);
    }

    const onTicketUpdate = (op) => {
        props.onValueChange(op)
    }

    const navig = useHistory();
    const customId = "custom-id-yes";

    if(Cookies.get('usuario-logado') == null) {
        
        toast.dark('😅 Você já está logado', {
            toastId: customId
        });

        
    }

    return (
        <FaixaUm background={props.imagemfundo}>
            <ToastContainer> </ToastContainer>
            <LoadingBar color='#13A06F' ref={ref} />
            <div class="the-event">
                <div class="image">
                    <img src={props.imagemcapa} alt="" width= "600em" height="320em" />
                </div>
            </div>
            <div class="the-qtd">
                <BoxCalculator onChange={alterarQtd} value={props.value} onTicketUpdate={onTicketUpdate} ticketValue={props.ticketValue}/>
            </div>
            <div class="the-button">
                <Botao onClick={props.updateScreen}> Prosseguir </Botao>
            </div>
        </FaixaUm>
    )
}