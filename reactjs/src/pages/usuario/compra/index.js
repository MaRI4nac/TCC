import Cookies from "js-cookie";
import { useState } from "react";
import { useHistory } from "react-router";
import BuyFirstBand from "./1st-band";
import BuySecondBand from "./2nd-band";
import BuyThirdBand from "./3rd-band";
import BuyFourthBand from "./4th-band";
import { Everything } from "./styled";


export default function AllBuy (props) {
    const navig = useHistory();

    if(!Cookies.get('usuario-logado')){
        alert('Você deve estar logado para efetuar a compra')
        navig.push('/inicial')
    }
    

    const [event, setEvent] = useState(props.location.state);
    const [qtd, setQtd] = useState(0)
    const [cardNumber, setCardNumber] = useState();
    const [cardOwner, CardOwner] = useState();
    const [cvc, setCvc] = useState();
    const [validity, setValidity] = useState();
    const [cpf, setCpf] = useState();
    const [userId, setUserId] = useState(JSON.parse(Cookies.get('usuario-logado')).id_usuario);
    const [paymentMethod, setPaymentMethod] = useState();
    const [dates, setDates] = useState([]);

    const alterarQtd = (qtd) => {
        setQtd(qtd);
    }

    const addDates = (dt) => {
        setDates()
    }

    const infoReadOnly = {
        evento: event.nomevento,
        valor: event.preco,
        categoria: event.id_categoria_infoc_nws_tb_categorium.ds_tema,
        comprador: JSON.parse(Cookies.get('usuario-logado')).nm_usuario,
        email: JSON.parse(Cookies.get('usuario-logado')).ds_email,
        cpf: JSON.parse(Cookies.get('usuario-logado')).ds_cpf,
        qtd: qtd
    }

    return (
        <Everything>
            <BuyFirstBand onUpdate={alterarQtd} value={qtd} />
            <BuySecondBand info={infoReadOnly} idEvent={event.id_evento}/>
            <BuyThirdBand  />
            <BuyFourthBand />
        </Everything>
    )
    
}
