import { Container } from './styled'
import { Table_header, Table_content2 } from './table'
import { ButtonLeftImage } from './buttons'
import { Link } from 'react-router-dom'
import Api from '../../../service/apiEvent'
import { Validador } from '../../../components/commum/index'
import { useState } from 'react'

const api = new Api();

export default function Crud() {

    const [eventos, setEventos] = useState();
    
    const getEvents = async (nome, categoria) => {
        let r = await api.crudGetEvents(nome, categoria);
        console.log(r)
        if(!Validador(r))
            return;
        
        setEventos(r);
    }

    useState(() => {
        getEvents('', '');
    }, [])

    return (
        <Container>
            <h1> GERENCIADOR DE EVENTOS </h1>
            <div className="inputs">
                <div className="agp-input">
                    <input placeholder="Filtrar por Nome" onChange={(e) => getEvents(e.target.value, '')}/>
                    
                    <input placeholder="Filtro por categoria" />
                </div>
                <Link to="/addevent"> <ButtonLeftImage texto="Novo Evento" imagem="assets/images/acao_novoEvento.png" /> </Link>
            </div>   
            <table>
                <Table_header titulo1="Evento" titulo2="Genêro" titulo3="Ações"/>
                {!eventos ? <div> </div> : eventos.map(item => {
                    return <Table_content2 key={item.id_evento} campo1={item.nm_evento} campo2={item.ds_genero} />
                })}
            </table>
        </Container>        
    )
}