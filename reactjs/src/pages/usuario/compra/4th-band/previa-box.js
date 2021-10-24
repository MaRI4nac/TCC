import { ThatsPrevia } from "./styled";


export default function PreviaBox () {
    return (
        <ThatsPrevia>
            <div class="ticket-icon"> <img src="/assets/images/ticket-event.png" alt="" width="180em" height="150em" /> </div>
                <div class="ticket-informations">
                    <div class="tkt-inf"> <b> EVENTO: </b> Peter Pan, O Musical </div>
                    <div class="tkt-inf"> <b> COMPRADOR: </b> Yumi Zézinha da Fé </div>
                    <div class="tkt-inf"> <b> FORMA DE PAGAMENTO: </b> Cartão de Crédito </div>
                    <div class="tkt-inf"> <b> DATA E HORA: </b> 29/08/2021 </div>
                </div>
        </ThatsPrevia>
    )
}