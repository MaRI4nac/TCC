import { Botao } from '../../../components/botoes/styled'
import { PrincipalPart } from './styled'
import { Link } from 'react-router-dom'
import ADMiniBox from './mini-boxes'
import { Pie } from 'react-chartjs-2'
import { useState } from 'react';
import Api from '../../../service/apiAdmGeneral';
const api = new Api();

export default function ADMPrincipal () {

    const[report, setReport] = useState([]);
    const[type, setType] = useState('');

    async function listar(type) {
        let e = await api.allReports(type);
        setReport(e);
    }

    
    const pieGraphic = () => {
        const data = {
          labels: report.map(item => item.categoria), 
          datasets: [
            {
              data: report.map(item => item.qtd),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
              hoverOffset: 4,
            },
          ],
        };
        const options = {
          plugins: {
            legend: {
              labels: {
                color: "black", 
                font:{
                  size: 15
                }
              }
            },
            
          },
        }
        return  <Pie data={data} />
      }

    return (
        <PrincipalPart>
        <div class="first-band">
            <div class="transparent-band">
                <div class="title"> Relatório Semanal </div>
                <div class="graphics">
                   {pieGraphic()}
                </div>

                <div class="buttons">
                    <Botao onClick={() => listar('semanal')}> Carregar relatório </Botao>
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