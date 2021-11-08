import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Api from "../../../service/apiBuy";
import BuyFirstBand from "./1st-band";
import BuySecondBand from "./2nd-band";
import BuyThirdBand from "./3rd-band";
import BuyFourthBand from "./4th-band";
import { Everything } from "./styled";
import { Validador } from '../../../components/commum/index'

const api = new Api();


export default function AllBuy (props) {
    const navig = useHistory();

    if(!Cookies.get('usuario-logado')){
        navig.push('/logar')
    }

    const [event, setEvent] = useState(props.location.state);
    const [user, setUser] = useState(JSON.parse(Cookies.get('usuario-logado')));

    const [qtd, setQtd] = useState(1)
    const [cardNumber, setCardNumber] = useState('');
    const [cardOwner, setCardOwner] = useState('');
    const [cvc, setCvc] = useState('');
    const [validity, setValidity] = useState('');
    const [cpf, setCpf] = useState();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [dates, setDates] = useState([]);
    const [hours, setHours] = useState([]);
    const [ticketValue, setTicketValue] = useState(event.preco)

    const alterarQtd = (qtd) => {
        setQtd(qtd);
    }
 
    const updateFieldDate = (date, i) => {
        if (!date) {
            return;
        }
        var r = [...dates]
        r[i] = date.dt_evento
      
        setDates(r)
    }

    const updateFieldHour = (hour, i) => {
        if (!hour) {
            return;
        }
        var r = [...hours]
        r[i] = hour.id_calendario_item
        
        console.log(hours)

        setHours(r)
    }

    const updateTicketValue = (op) => {
        if (op == "somar") {
            setTicketValue(Number(ticketValue) + Number(event.preco));
        }
        else if (op == "sub") {
            setTicketValue(Number(ticketValue) - Number(event.preco));
        }
    }

    const getCreditCard = (cardNumber, cardOwner, cvc, validity, cpf, paymentMethod) => {
        setCardNumber(cardNumber)
        setCardOwner(cardOwner)
        setCvc(cvc)
        setValidity(validity)
        setCpf(cpf)
        setPaymentMethod(paymentMethod)
    }

    const infoReadOnly = {
        evento: event.nomevento,
        valor: event.preco,
        categoria: event.ds_tema,
        comprador: user.nm_usuario,
        email: user.ds_email,
        cpf: user.ds_cpf,
        qtd: qtd
    }

    const createVendaItem = async () => {
        let r = await api.finishBuy(cardNumber, cardOwner, cvc, validity, cpf, user.id_usuario, paymentMethod, hours);
        console.log(cardNumber, cardOwner, cvc, validity, cpf, user.id_usuario, paymentMethod, hours)
        if(!Validador(r))
            return;

        navig.push('/   ')
        return r;
    }

    

    return (
        <Everything>
            <BuyFirstBand onUpdate={alterarQtd} value={qtd} onValueChange={updateTicketValue} ticketValue={ticketValue}/>
            <BuySecondBand info={infoReadOnly} idEvent={event.id_evento} updateFieldDate={updateFieldDate} updateFieldHour={updateFieldHour}/>
            <BuyThirdBand  cardInformation={getCreditCard}/>
            <BuyFourthBand onFinish={createVendaItem}/>
        </Everything>
    )
    
}
