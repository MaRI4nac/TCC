import { Container } from './styled'
import Cabecalho from '../../../components/cabecalho'
import { useEffect, useRef, useState } from 'react';
import DirBox from './dir-box';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import Api from '../../../service/apiEvent'
const api = new Api();

export default function BuscaDirecionada (props) {

    const[events, setEvents] = useState([])

    function getQuery(name) {
        return new URLSearchParams(props.location.search).get(name);
    }

    const ref = useRef(null);


    async function listar() {
        let id = getQuery('categoria');
        
        const resp = await api.directedSearch(id);
        console.log(resp)
        setEvents(resp);
        
    }


    useEffect(() => {
        listar();
    }, [])


    return (
        <Container>
        <ToastContainer> </ToastContainer>
        <LoadingBar color='#f11946' ref={ref} />
            <Cabecalho />
            <div className="secondary-container"> 
                <div className="background-sphere"> 
                    <img src={props.location.state.img} alt="" />
                    <div> {props.location.state.categoria} </div>
                </div>
                {console.log(events)}
                { events.map((item) =>
                    < DirBox key={item.id_evento} info={item}/>
                )}
                
            </div>
        </Container>
    )
}