import { Container } from './styled'
import Cabecalho from '../../../components/cabecalho'
import { useEffect } from 'react';

import Api from '../../../service/apiEvent'
import DirBox from './dir-box';
const api = new Api();

export default function BuscaDirecionada (props) {
    function getQuery(name) {
        return new URLSearchParams(props.location.search).get(name);
    }


    async function listar() {
        let id = getQuery('categoria');

        const resp = await api.directedSearch(id);
        console.log(resp);
    }


    useEffect(() => {
        listar();
    }, [])


    return (
        <Container>
            <Cabecalho />
            <div className="secondary-container"> 
                <div className="background-sphere"> 
                    <img src="peças.png" alt="" />
                    <div> PEÇAS </div>
                </div>
                <DirBox />
                <DirBox />
                <DirBox />
                <DirBox />
                
            </div>
        </Container>
    )
}