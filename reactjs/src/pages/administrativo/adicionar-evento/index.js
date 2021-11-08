import React from 'react';
import { Botao } from '../../../components/botoes/styled'
import { Container } from './styled';

export default function AddEvent () {
    return (
        <Container>
            <div class="title">
                <div class="the-polygon"> <img src="play-button.png" alt="" width="40em" hwight="40em" /> </div>
                <div class="the-title"> NOME EVENTO </div>
            </div>
            <div class="principal-box">
                <div class="boxes">
                    <div class="row">
                        <div class="mini-box">
                            <label for=""> Gênero: </label>
                            <input type="text" />
                        </div>
                        <div class="mini-box">
                            <label for=""> Nome do evento: </label>
                            <input type="text" class="event-name"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="row">
                                    <div class="mini-box">
                                        <label for=""> Categoria: </label>
                                        <input type="text" />
                                    </div>
                                    <div class="mini-box">
                                        <label for=""> Elenco: </label>
                                        <input type="text" />
                                    </div>      
                            </div>
                            <div class="row">
                                <div class="mini-box">
                                    <label for=""> Classificação Etária: </label>
                                    <input type="text" />
                                </div>
                                <div class="mini-box">
                                    <label for=""> Valor do Ingresso: </label>
                                    <input type="text" />
                                </div>
                        </div>
                        </div>
                        <div class="column">
                            <div class="date-ff">
                                <div class="mini-box">
                                    <label for=""> Data Início: </label>
                                    <input type="date" />
                                </div>
                                <div class="mini-box">
                                    <label for=""> Data Final: </label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div class="last-button"><button> Gerenciar Sessões </button></div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="column">
                            <div class="mini-box">
                                <label for=""> Imagem Principal: </label>
                                <div class="image"></div>
                            </div>
                        </div>
                        <div class="column1">
                            <div class="mini-box">
                                <label for=""> Imagem de Fundo: </label>
                                <input type="file" />
                            </div>
                            <div class="mini-box">
                                <label for=""> Imagem Secundária: </label>
                                <input type="file" />
                            </div>
                        </div>
                        <div class="column">
                            <label for=""> Descrição: </label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="last-button"><button> Adicionar Evento </button></div>
        </Container>
    )
}  