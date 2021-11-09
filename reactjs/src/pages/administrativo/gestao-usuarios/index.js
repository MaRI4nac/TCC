import { Table_header, Table_content } from '../crud/table'
import { Container } from './styled'

import Api from '../../../service/apiUsers'
import { useEffect, useState } from 'react';
const api = new Api();  

export default function GestaoUsuario() {
    const [ user, setUser ] = useState([]); 
    
    async function List(order) { 
       const resp = await api.OrderManagement(order);
       console.log(resp); 

       setUser(resp); 
    }

    useEffect(() => {
      List();
  }, [])

  return (

        <Container>
            <h1> Usuários </h1>
            <button className="filter"> 
                <div> Listar em ordem alfabetica  </div>
                <img src="/assets/images/userArrow.png" alt="" />
            </button>
            <table>
                <Table_header titulo1 ="Usuário" titulo2="Email"/>
                {user.map(item => {
                    return <Table_content campo1={item.usuario} campo2 ={item.email} usuario={true} />
                })}
            </table>
        </Container>
    )
}