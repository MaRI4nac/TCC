import { Relator } from "./styled"
import { Botao } from "../../../components/botoes/styled"
import { useState } from "react";
import { Pie } from 'react-chartjs-2'
import Api from "../../../service/apiAdmGeneral";
const api = new Api();


export default function ADMRelatorios () {
    const[report, setReport] = useState([]);

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
                'rgba(21, 49, 49, 1)',
                'rgba(36, 174, 174, 1)',
                'rgba(41, 109, 109, 1)'
              ],
              borderColor: [
                'rgba(41, 109, 109, 1)'

              ],
              borderWidth: 1,
              hoverOffset: 4,
              
            },
          ],
        };
        const options = {
          layout: {
            padding: 20
        },
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
        return  <Pie data={data} options={options} />
      }



    return (
        <Relator>
        <div class="title"> Relatórios </div>
        <div class="graphics-rel">
            <div class="column">
                <div class="the-box">
                    <div> 
                        <div class="the-title"> Relatório Semanal </div>
                        <div class="the-subtitle"> Gerado no dia 00/00/0000, às 23h59 </div>
                    </div>
                    <div class="the-graphic">
                        <div> {pieGraphic()} </div>
                    </div>
                    <div class="the-button">
                        <Botao onClick={() => listar('semanal')} > Gerar Relatório </Botao>
                    </div>
                </div>
                <div class="the-box">
                    <div> 
                        <div class="the-title"> Relatório Mensal </div>
                        <div class="the-subtitle"> Gerado no dia 00/00/0000, às 23h59 </div>
                    </div>
                    <div class="the-graphic">
                        <div> {pieGraphic()} </div>
                    </div>
                    <div class="the-button">
                        <Botao onClick={() => listar('mensal')}> Gerar Relatório </Botao>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="the-box">
                    <div> 
                        <div class="the-title"> Relatório Semestral </div>
                        <div class="the-subtitle"> Gerado no dia 00/00/0000, às 23h59 </div>
                    </div>
                    <div class="the-graphic">
                    <div> {pieGraphic()} </div>
                    </div>
                    <div class="the-button">
                        <Botao onClick={() => listar('semestral')}> Gerar Relatório </Botao>
                    </div>
                </div>
                <div class="the-box">
                    <div> 
                        <div class="the-title"> Relatório Anual </div>
                        <div class="the-subtitle"> Gerado no dia 00/00/0000, às 23h59 </div>
                    </div>
                    <div class="the-graphic">
                        <div> {pieGraphic()} </div>
                    </div>
                    <div class="the-button">
                        <Botao onClick={() => listar('anual')}> Gerar Relatório </Botao>
                    </div>
                </div>
            </div>
        </div>

    </Relator>
    )
}