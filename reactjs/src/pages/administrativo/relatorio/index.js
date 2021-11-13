import { Relator } from "./styled"
import { Botao } from "../../../components/botoes/styled"
import { useEffect, useState } from "react";
import PieGraphic from './graphicType';
import Api from "../../../service/apiAdmGeneral";
const api = new Api();


export default function ADMRelatorios () {
    const[report, setReport] = useState([]);

    async function listar(type) {
        let e = await api.allReports(type);
        
        let r = report;
        e.push({tipo: type})
        r.push(e);
        setReport(r)

        console.log(report)
    }

    useEffect(() => {
        listar('semanal');
        listar('mensal');
        listar('semestral');
    }, [])



    return (
        <Relator>
        <div class="title"> Relatórios </div>
        <div class="graphics-rel">
            <div class="column">
                <div class="the-box">
                    <div> 
                        <div class="the-title"> Relatório Semanal </div>
                    </div>
                    <div class="the-graphic">
                        <div> <PieGraphic data={report}> </PieGraphic> </div>
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
                        <div> </div>
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
                    <div>  </div>
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
                        <div>  </div>
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


// report.map(item => {
//     <div class="the-box">
//     <div> 
//         <div class="the-title"> Relatório {item.tipo} </div>
//     </div>
//     <div class="the-graphic">
//         <div> <PieGraphic data={item}> </PieGraphic> </div>
//     </div>
//     <div class="the-button">
//     </div>
// </div>
// })