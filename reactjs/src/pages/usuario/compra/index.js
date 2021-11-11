import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Api from "../../../service/apiBuy";
import BuyFirstBand from "./1st-band";
import BuySecondBand from "./2nd-band";
import BuyThirdBand from "./3rd-band";
import BuyFourthBand from "./4th-band";
import { Everything } from "./styled";
import { Validador } from '../../../components/commum/index'

const api = new Api();

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado == null) {
        navigation.push('/logar')
        return null;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado; 
}


export default function AllBuy (props) {
    const navig = useHistory();

    const usuarioLogado = lerUsuarioLogado(navig) || {};

    const [event, setEvent] = useState(props.location.state);
    const [user, setUser] = useState(usuarioLogado);

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

    const [infoReadOnly, setInfoReadOnly] = useState();
    const [infoPrevia, setInfoPrevia] = useState({});

    const [exibindo, setExibindo] = useState(0);


    const alterarQtd = (qtd) => {
        setQtd(qtd);
    }

    const updateTicketValue = (op) => {
        if (op == "somar") {
            setTicketValue(Number(ticketValue) + Number(event.preco));
        }
        else if (op == "sub") {
            setTicketValue(Number(ticketValue) - Number(event.preco));
        }
    }

    const zeroToOne = () => {
        setExibindo(1);
        setInfoReadOnly({
            evento: event.nomevento,
            valor: event.preco,
            categoria: event.ds_tema,
            comprador: user.nm_usuario,
            email: user.ds_email,
            cpf: user.ds_cpf,
            qtd: qtd
        })
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
        r[i] = hour
        

        setHours(r)
    }

    const OnetoTwo = () => {
        setExibindo(2);
    }

    const getCreditCard = (cardNumber, cardOwner, cvc, validity, cpf, paymentMethod) => {
        setCardNumber(cardNumber)
        setCardOwner(cardOwner)
        setCvc(cvc)
        setValidity(validity)
        setCpf(cpf)
        setPaymentMethod(paymentMethod)
    }


    const createVendaItem = async () => {
        let r = await api.finishBuy(cardNumber, cardOwner, cvc, validity, cpf, user.id_usuario, paymentMethod, hours);
        console.log(cardNumber, cardOwner, cvc, validity, cpf, user.id_usuario, paymentMethod, hours)
        if(!Validador(r))
            return;

        navig.push('/')
        return r;
    }
    

    return (
        <Everything>
            {exibindo == 0 &&
             <BuyFirstBand onUpdate={alterarQtd} value={qtd} onValueChange={updateTicketValue} ticketValue={ticketValue} imagemcapa={event.imagemcapa} imagemfundo={event.imagemfundo} updateScreen={zeroToOne}/>
            }
            {exibindo == 1 && 
             <BuySecondBand info={infoReadOnly} idEvent={event.id_evento} updateFieldDate={updateFieldDate} updateFieldHour={updateFieldHour} updateScreen={OnetoTwo}/>
            }
            {
                exibindo == 2 && 
                <BuyThirdBand  cardInformation={getCreditCard} updateScreen={createVendaItem}/>
            }
    
        </Everything>
    )
    
}
