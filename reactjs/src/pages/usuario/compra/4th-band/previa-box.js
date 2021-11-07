import { useState } from "react";
import { ThatsPrevia } from "./styled";


export default function PreviaBox (props) {

    return (
        <ThatsPrevia>
            <div class="ticket-icon"> <img src="/assets/images/ticket-event.png" alt="" width="180em" height="150em" /> </div>
                <div class="ticket-informations">
                    <div class="tkt-inf"> <b> EVENTO: </b> {props.evento} </div>
                    <div class="tkt-inf"> <b> COMPRADOR: </b> {props.comprador} </div>
                    <div class="tkt-inf"> <b> FORMA DE PAGAMENTO: </b> {props.paymentMethod} </div>
                    <div class="tkt-inf"> <b> DATA: </b> {props.data} </div>
                    <div class="tkt-inf"> <b> HORA: </b> {props.hora} </div>
                </div>
        </ThatsPrevia>
    )
}