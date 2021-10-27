import { EventTypeStyle } from './styled'
import Cabecalho from '../../../components/cabecalho'
import { Botao } from '../../../components/botoes/styled'
import { Link } from 'react-router-dom'



export default function TelaEvento() {
    return (
        <EventTypeStyle>
            <div className="try-container">
            <div class="ct-color">
                <div class="first-band">
                    <Cabecalho />
                    <div class="principal-image-title">
                        <div class="pric-image">
                            <img src="/assets/images/eventImg.jpg" alt="" width="200px" height="300px" />
                        </div>
                        <div class="princ-texts">
                            <div class="p-title"> Naquela Noite Eu Olhei Pela Janela e Vi A Lua Morrer </div>
                            <div class="p-description">
                                <ul>
                                    <li> <b> Categoria: </b> Drama </li>
                                    <li> <b> Duração: </b> 50 minutos </li>
                                    <li> <b> Classificação etária: </b> 16 anos </li>
                                    <li> <b> Preço: </b> R$ 60,00 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="second-band">
                    <div class="sinopsys"><b> Sinopse: </b> O espetáculo apresenta o íntimo de um homem solitário de 65 anos. Numa tarde, trancado em seu apartamento no centro da cidade, ele recorda o passado, questiona o presente e coloca em dúvida o futuro. No palco, a vida desse homem, da juventude até o estigma de ser velho, gay e soropositivo. Esta é uma peça-denúncia sobre o envelhecer do gay numa comunidade onde o ideal de beleza e juventude são intensos demais. O personagem principal vive uma noite de lembranças, onde coloca na balança e divide com o espectador os seus relacionamentos, as suas aventuras, os seus desesperos e, sobretudo, a sua solidão. Trata-se de uma noite de cartas na mesa, de um claro, honesto e profundo diálogo do personagem consigo próprio. A peça conta com dois musicistas, que tocam contrabaixo e violino ao vivo, enquanto o ator divide a sua história com a plateia. </div>
                    <div class="informations-about">
                        <div class="line-information">
                            <div class="icon-information">
                                <img src="/assets/images/eventTypeBall.svg" alt="" width="20px" height="20px" />
                            </div>
                            <div class="desc-information"> <b> Local: </b>  Giostri Livraria Teatro (Paulista) </div>
                        </div>
                        <div class="line-information">
                            <div class="icon-information">
                                <img src="/assets/images/eventTypeBall.svg"  alt=""  width="20px" height="20px" />
                            </div>
                            <div class="desc-information"> <b> Elenco/Direção: </b>  Texto: Ricardo Brighi. Direção: Wesley Leal. Músicos: Lígia Machado (violino) e Webster Silas (contrabaixo). Elenco: Ricardo Brighi. </div>
                        </div>
                        <div class="line-information">
                            <div class="icon-information">
                                <img src="/assets/images/eventTypeBall.svg"  alt="" width="20px" height="20px" />
                            </div>
                            <div class="desc-information"> <b> Data: </b>  de 29 de agosto até 31 de setembro de 2021. </div>
                        </div>
                    </div>
                </div>
                <div class="third-band">
                    <div class="button">
                        <Link to="/ingresso-compra"> <Botao> Adquirir Ingresso </Botao> </Link>
                    </div>
                </div>
            </div>
            </div>
        </EventTypeStyle>
    )
}

