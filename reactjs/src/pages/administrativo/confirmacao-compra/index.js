import { Container } from './styled'

import React, { useState, useEffect } from 'react';
import { Box } from './box-purchase/styled'

import Api from '../../../service/apiAdmGeneral';
const api = new Api();

export default function ConfirmacaoCompra () { 

    const [ticket, setTicket] = useState([])

    async function List() { 
        const resp = await api.getConfirmTicket(); 
        setTicket(resp);
    }

     async function Confirm(id) { 
         const resp = await api.getConfirmTicket(id);
         console.log(resp); 

         List(); 
     }

    useEffect(() => {
        List();
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
                                        <button onClick={() => Confirm(item.id)}> <img src="data:image/png;base64,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" width = "60"  height = "60" />  </button>  
                                        <button> <img src="https://o.remove.bg/downloads/c641c961-25dc-4f9d-8655-2748db0cd71a/images-removebg-preview.png" width = "60" height = "60" /> </button>   
                                </div> 
                           </Box> 
                        )} 
                    </div> 
                </Container> 
    )
}