import { Container } from './styled'
import Cabecalho from '../../../components/cabecalho'
import DirBox from '../busca-direcionada/dir-box'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'

import Api from '../../../service/apiEvent'
const api = new Api ();



export default function BuscaDireta(props) {

    const[event, setEvent] = useState([]);
    const navig = useHistory();

    function getQuery(name) {
        return new URLSearchParams(props.location.search).get(name);
    }

    let mySearch = getQuery('search');

    async function listar() {
        let mySearch = getQuery('search');

        const resp = await api.directSearch(mySearch);
        setEvent(resp);
        console.log(resp);
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <Container>
            <Cabecalho />
            <div className="secondary-container"> 
                <div className="search">
                    <div> Você buscou por...  <b> " {mySearch} " </b> </div>
                    <div> Encontramos isso: </div>
                </div>
                {event.map((item) =>
                    < DirBox info={item} />
                
                )}
        
            </div>
        </Container>
    )
}