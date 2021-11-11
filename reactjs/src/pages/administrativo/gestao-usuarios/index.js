import { Table_header, Table_content } from '../crud/table'
import { Container } from './styled'

import Api from '../../../service/apiUsers'
import { useEffect, useState } from 'react';
const api = new Api();  

export default function GestaoUsuario() {
    const [ user, setUser ] = useState([]); 
    
    const [ ordenacao, setOrdenacao ] = useState('Listar em ordem crescente'); 
    
    async function List() { 
       const resp = await api.OrderManagement(ordenacao);
       setUser(resp); 
    }

    useEffect(() => {
      List();
    }, [ordenacao])

  return (

        <Container>
            <h1> Usuários </h1> 
                <select className="filter" name="cars" id="cars" value={ordenacao} onChange={e => setOrdenacao(e.target.value)} >
                    <option value="Listar em ordem crescente" > A-Z </option>
                    <option value="Listar em ordem decrescente"> Z-A </option>
                    <option value="Listar administradores"> administradores </option>
                </select>

            <table>
                <Table_header titulo1 ="Usuário" titulo2="Email"/>
                {user.map(item => {
                    return <Table_content campo1={item.nm_usuario} campo2 ={item.ds_email} usuario={true} />
                })}
            </table>
        </Container>
    )
}