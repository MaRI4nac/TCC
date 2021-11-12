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
                                        <button onClick={() => Confirm(item.id, 1)}> <img src="https://o.remove.bg/downloads/b6224786-4112-4886-859d-87d8a064239c/image-removebg-preview.png" width = "60"  height = "60" />  </button>  
                                        <button onClick={() => Confirm(item.id, 0)}> <img src="https://o.remove.bg/downloads/11e8d5f8-410a-434c-80a8-4faef9a5e255/image-removebg-preview.png" width = "60" height = "60" /> </button>   
                                </div> 
                           </Box> 
                        )} 
                    </div> 
                </Container> 
    )
}