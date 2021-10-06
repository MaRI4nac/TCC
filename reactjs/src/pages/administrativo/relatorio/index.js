import { Relator } from "./styled"
import { Botao } from "../../../components/botoes/styled"


export default function ADMRelatorios () {
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
                        <img src="/assets/images/graphics.svg" alt="" />
                    </div>
                    <div class="the-button">
                        <Botao> Gerar Relatório </Botao>
                    </div>
                </div>
                <div class="the-box">
                    <div> 
                        <div class="the-title"> Relatório Mensal </div>
                        <div class="the-subtitle"> Gerado no dia 00/00/0000, às 23h59 </div>
                    </div>
                    <div class="the-graphic">
                        <img src="/assets/images/graphics.svg" alt="" />
                    </div>
                    <div class="the-button">
                        <Botao> Gerar Relatório </Botao>
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
                        <img src="/assets/images/graphics.svg" alt="" />
                    </div>
                    <div class="the-button">
                        <Botao> Gerar Relatório </Botao>
                    </div>
                </div>
                <div class="the-box">
                    <div> 
                        <div class="the-title"> Relatório Anual </div>
                        <div class="the-subtitle"> Gerado no dia 00/00/0000, às 23h59 </div>
                    </div>
                    <div class="the-graphic">
                        <img src="/assets/images/graphics.svg" alt="" />
                    </div>
                    <div class="the-button">
                        <Botao> Gerar Relatório </Botao>
                    </div>
                </div>
            </div>
        </div>

    </Relator>
    )
}