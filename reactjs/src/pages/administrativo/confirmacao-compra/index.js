import { Container } from './styled'

import React, { useState, useEffect } from 'react';
import { Box } from './box-purchase/styled'

import Api from '../../../service/apiAdmGeneral';
const api = new Api();

export default function ConfirmacaoCompra () { 

    const [ticket, setTicket] = useState([]);
    const [value, setValue] = useState();

    async function list() { 
        const resp = await api.getConfirmTicket(); 
        console.log(resp)
        setTicket(resp);
    }

    console.log(ticket);
     async function Confirm(id, number) { 
        const resp = await api.putConfirmTicket(id, number);

        list(); 
     }

    useEffect(() => {
        list();
    }, [])


    return ( 
                <Container> 
                    <div className = "Text"> 
                        <div className = "Title-top"> INGRESSOS </div> 
                        <div className = "Caption-top"> CONFIRMAÇÃO DE COMPRAS </div>     
                    </div> 

                    <div className = "Tickets"> 
                        { ticket.map(item => 
                            <Box>  
                                <div className = "Image-ticket"> <img src = "/assets/images/NWS-Ticket.png" width = "190" height = "130" />  </div>
                                <div className = "Event-Information"> 
                                        <div className = "Title"> {item.usuario} </div> 
                                        <div className = ""> INGRESSO: {item.evento} </div> 
                                        <div> PAGAMENTO: {item.tipoPagamento} </div>    
                               </div> 
        
                               <div className = "Buttons-confirm"> 
                                        <button onClick={() => Confirm(item.id, 1)}> <img src="/assets/images/certo.jpg" width = "60"  height = "60" />  </button>  
                                        <button onClick={() => Confirm(item.id, 0)}> <img src="/assets/images/errado.png" width = "60" height = "60" /> </button>   
                                </div> 
                           </Box> 
                        )} 
                    </div> 
                </Container> 
    )
}