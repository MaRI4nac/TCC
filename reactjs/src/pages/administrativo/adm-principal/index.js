import { Botao } from '../../../components/botoes/styled'
import { PrincipalPart } from './styled'
import { Link } from 'react-router-dom'
import ADMiniBox from './mini-boxes'
import DonutChart from 'react-donut-chart';
import { useState } from 'react';
import Api from '../../../service/apiAdmGeneral';
const api = new Api();

export default function ADMPrincipal () {

    const[report, setReport] = useState([]);

    async function listar(type) {
        let e = await api.allReports(type);
        setReport(e);
    }

    return (
        <PrincipalPart>
        <div class="first-band">
            <div class="transparent-band">
                <div class="title"> Relatório Semanal </div>
                <div class="graphics">
                <DonutChart
                    height="350"
                    width="350"
                    data={[{
                        label: 'Give you up',
                        value: 25
                    },
                    {
                        label: 'cu',
                        value: 75
                    },
                    {
                        label: 'nada',
                        value: 30
                    }]}
                    colors={[
                        "#153131",
                        "#24AEAE",
                        "#296D6D"
                    ]}
                     />
                </div>

                <div class="buttons">
                    <Botao class="but-bit"> <Link to="/relatorios" className="Elink"> Ver mais relatórios </Link> </Botao>
                </div>
            </div>
        </div>
        <div class="second-band">
            <div class="title"> Gerenciamento Geral </div>
            <div class="events-users-tickets">
                <Link to="/crud" className="Wlink"> <ADMiniBox image="/assets/images/events.svg" title="Eventos" descript="30 eventos registrados"/> </Link>
                <Link to ="usuario" className="Wlink"> <ADMiniBox image="/assets/images/tickets.svg" title="Usuários" descript="30 usuários registrados" /> </Link>
                <Link to="/compra" className="Wlink"> <ADMiniBox image="/assets/images/users.svg" title= "Ingressos" descript="20 ingressos aguardando confirmação" /> </Link>
            </div>
        </div>
    </PrincipalPart>
    )
}