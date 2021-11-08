import React from 'react';
import { Botao } from '../../../components/botoes/styled'
import { Container } from './styled';

export default function AddEvent () {
    return (
        <Container>
            <div className="title">
                <div className="the-polygon"> <img src="play-button.png" alt="" width="40em" hwight="40em" /> </div>
                <div className="the-title"> NOME EVENTO </div>
            </div>
            <div className="principal-box">
                <div className="boxes">
                    <div className="row">
                        <div className="mini-box">
                            <label for=""> Gênero: </label>
                            <input type="text" />
                        </div>
                        <div className="mini-box">
                            <label for=""> Nome do evento: </label>
                            <input type="text" clasNames="event-name"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="row">
                                    <div className="mini-box">
                                        <label for=""> Categoria: </label>
                                        <input type="text" />
                                    </div>
                                    <div className="mini-box">
                                        <label for=""> Elenco: </label>
                                        <input type="text" />
                                    </div>      
                            </div>
                            <div className="row">
                                <div className="mini-box">
                                    <label for=""> Classificação Etária: </label>
                                    <input type="text" />
                                </div>
                                <div className="mini-box">
                                    <label for=""> Valor do Ingresso: </label>
                                    <input type="text" />
                                </div>
                        </div>
                        </div>
                        <div className="column">
                            <div className="date-ff">
                                <div className="mini-box">
                                    <label for=""> Data Início: </label>
                                    <input type="date" />
                                </div>
                                <div className="mini-box">
                                    <label for=""> Data Final: </label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="last-button"><Botao> Gerenciar Sessões </Botao></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                            <div className="mini-box">
                                <label for=""> Imagem Principal: </label>
                                <div className="image"></div>
                            </div>
                        </div>
                        <div className="column1">
                            <div className="mini-box">
                                <label for=""> Imagem de Fundo: </label>
                                <input type="file" />
                            </div>
                            <div className="mini-box">
                                <label for=""> Imagem Secundária: </label>
                                <input type="file" />
                            </div>
                        </div>
                        <div className="column">
                            <label for=""> Descrição: </label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="last-button"><Botao> Adicionar Evento </Botao></div>
        </Container>
    )
}  