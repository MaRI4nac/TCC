import React, { useState } from 'react';
import { Botao } from '../../../components/botoes/styled'
import { Container } from './styled';

export default function AddEvent () {
    const [nmEvento, setNmEvento] = useState();
    const [categoria, setCategoria] = useState();
    const [duracao, setDuracao] = useState();
    const [classificacao, setClassificacao] = useState();
    const [valorIngresso, setValorIngresso] = useState();
    const [local, setLocal] = useState();
    const [dtMin, setDtMin] = useState();
    const [dtMax, setDtMax] = useState();
    const [elenco, setElenco] = useState();
    const [descEvento, setDescEvento] = useState();
    const [imgCapa, setImgCapa] = useState();
    const [imgFundo, setImgFundo] = useState();
    const [imgSec, setImgSec] = useState();
    const [genero, setGenero] = useState();

    let formData = new FormData();
    formData.append('nmEvento', nmEvento)
    formData.append('genero', genero)
    formData.append('duracao', duracao)
    formData.append('classificacao', classificacao)
    formData.append('valorIngresso', valorIngresso)
    formData.append('local', local)
    formData.append('dtMin', dtMin)
    formData.append('dtMax', dtMax)
    formData.append('elenco', elenco)
    formData.append('descEvento', descEvento)
    formData.append('imgCapa', imgCapa)
    formData.append('imgFundo', imgFundo)
    formData.append('imgSec', imgSec)
    formData.append('genero', genero)

    return (
        <Container>
            <div className="title">
                <div className="the-polygon"> <img src="/assets/images/play-button.png" alt="" width="40em" hwight="40em" /> </div>
                <div className="the-title"> NOME EVENTO </div>
            </div>
            <div className="principal-box">
                <div className="boxes">
                    <div className="row">
                        <div className="mini-box">
                            <label for=""> Gênero: </label>
                            <input type="text" value={genero} onChange={e => setGenero(e.target.value)}/>
                        </div>
                        <div className="mini-box">
                            <label for=""> Nome do evento: </label>
                            <input type="text" clasNames="event-name" value={nmEvento} onChange={e => setNmEvento(e.target.value)} />
                        </div>
                        <div className="mini-box">
                            <label for=""> Duração: </label>
                            <input type="time" clasNames="event-name" value={duracao} onChange={e => setDuracao(e.target.value)}/>
                        </div>
                        <div className="mini-box">
                            <label for=""> Local: </label>
                            <input type="text" clasNames="event-name" value={local} onChange={e => setLocal(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="row">
                                    <div className="mini-box">
                                        <label for=""> Categoria: </label>
                                        <select onChange={e => setCategoria(e.target.value)}>
                                            <option value= 'peças'> Peças </option>
                                            <option value= 'shows'> Shows </option>
                                            <option value= 'museus'> Museus </option>
                                        </select>
                                    </div>
                                    <div className="mini-box">
                                        <label for=""> Elenco: </label>
                                        <input type="text" value={elenco} onChange={e => setElenco(e.target.value)} />
                                    </div>      
                            </div>
                            <div className="row">
                                <div className="mini-box">
                                    <label for=""> Classificação Etária: </label>
                                    <input type="text" value={classificacao} onChange={e => setClassificacao(e.target.value)}/>
                                </div>
                                <div className="mini-box">
                                    <label for=""> Valor do Ingresso: </label>
                                    <input type="text" value={valorIngresso} onChange={e => setValorIngresso(e.target.value)}/>
                                </div>
                        </div>
                        </div>
                        <div className="column">
                            <div className="date-ff">
                                <div className="mini-box">
                                    <label for=""> Data Início: </label>
                                    <input type="date" value={dtMin} onChange={e => setDtMin(e.target.value)}/>
                                </div>
                                <div className="mini-box">
                                    <label for=""> Data Final: </label>
                                    <input type="date" value={dtMax} onChange={e => setDtMax(e.target.value)}/>
                                </div>
                            </div>
                            <div className="last-button"><Botao> Gerenciar Sessões </Botao></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                            <div className="mini-box">
                                <label for=""> Imagem Principal: </label>
                                <div className="image" value={imgCapa} onChange={e => setImgCapa(e.target.value)}></div>
                            </div>
                        </div>
                        <div className="column1">
                            <div className="mini-box">
                                <label for=""> Imagem de Fundo: </label>
                                <input type="file"  value={imgFundo} onChange={e => setImgFundo(e.target.value)}/>
                            </div>
                            <div className="mini-box">
                                <label for=""> Imagem Secundária: </label>
                                <input type="file"  value={imgSec} onChange={e => setImgSec(e.target.value)}/>
                            </div>
                        </div>
                        <div className="column">
                            <label for=""> Descrição: </label>
                            <textarea name="" id="" cols="30" rows="10"  value={descEvento} onChange={e => setDescEvento(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="last-button"><Botao> Adicionar Evento </Botao></div>
        </Container>
    )
}  