import { EventTypeStyle } from './styled'
import Cabecalho from '../../../components/cabecalho'
import { Botao } from '../../../components/botoes/styled'
import { Link } from 'react-router-dom'
import { useState } from 'react'



export default function TelaEvento(props) {


    const[event, setEvent] = useState(props.location.state)


    return (
        <EventTypeStyle>
            <div className="try-container">
            <div class="ct-color">
                <div class="first-band">
                    <Cabecalho />
                    <div class="principal-image-title">
                        <div class="pric-image">
                            <img src={event.imagemcapa} alt="" width="200px" height="300px" />
                        </div>
                        <div class="princ-texts">
                            <div class="p-title"> {event.nomevento} </div>
                            <div class="p-description">
                                <ul>
                                    <li> <b> Categoria: </b> {event.categoria} </li>
                                    <li> <b> Duração: </b> {event.duracao} </li>
                                    <li> <b> Classificação etária: </b> {event.classificacao} </li>
                                    <li> <b> Preço: </b> {`R$ ${event.preco}`} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="second-band">
                    <div class="sinopsys"><b> Sinopse: </b> {event.sinopse} </div>
                    <div class="informations-about">
                        <div class="line-information">
                            <div class="icon-information">
                                <img src="/assets/images/eventTypeBall.svg" alt="" width="20px" height="20px" />
                            </div>
                            <div class="desc-information"> <b> Local: </b>  {event.local} </div>
                        </div>
                        <div class="line-information">
                            <div class="icon-information">
                                <img src="/assets/images/eventTypeBall.svg"  alt=""  width="20px" height="20px" />
                            </div>
                            <div class="desc-information"> <b> Elenco/Direção: </b>  {event.elenco} </div>
                        </div>
                        <div class="line-information">
                            <div class="icon-information">
                                <img src="/assets/images/eventTypeBall.svg"  alt="" width="20px" height="20px" />
                            </div>
                            <div class="desc-information"> <b> Data: </b>  {`de ${event.dataminima} até ${event.datamaxima}`} </div>
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

