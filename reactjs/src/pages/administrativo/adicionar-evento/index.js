import React from 'react';
import { Botao } from '../../../components/botoes/styled'
import { Container } from './styled';

export default function AddEvent () {
    return (
        <Container> 
            <div className="NewEvent"> 
                <img src="/assets/images/Polygon.png"/>
                <h2> NOVO EVENTO </h2>
            </div>
            <div className="BoxInputs">
              <div className="BoxInputs-Margin"> 
                    <div className="Inputs"> 
                        <div className="InputLabel"> 
                            <label> Tema: </label>
                            <input type="text"/>  
                        </div>
                        <div className="InputLabel"> 
                            <label> Nova do evento: </label>
                            <input type="text"/> 
                        </div>  
                    </div> 
                    <div className="Inputs"> 
                        <div className="InputLabel"> 
                            <label> Categoria: </label>
                            <input type="text"/>  
                        </div>
                        <div className="InputLabel"> 
                            <label> Nome do autor: </label>
                            <input type="text"/> 
                        </div>
                        <div className="InputLabel"> 
                            <label> Data e hora do evento: </label>
                            <input type="date"/>  
                        </div>
                    </div>
                    <div className="Inputs"> 
                        <div className="InputLabel"> 
                            <label> Imagem principal: </label>
                            <input type="file" className="InputImageMain"/>
                        </div>

                        <div className="ImagesSecondary"> 
                            <div className="InputLabel"> 
                                <label> Imagem Fundo:  </label>
                                <input type="file" className="InputBackground"/>
                            </div>
                            <div className="InputLabel"> 
                                <label> Imagem Segundaria: </label>
                                <input type="file" className="InputImageSecondary"/>
                            </div>
                        </div>
                        <div className="InputLabel"> 
                            <label> Descrição: </label>
                            <textarea />
                        </div>
                    </div>
                </div> 
            </div> 
                <div> <Botao> ADICIONAR EVENTO </Botao></div>
        </Container>
    )
}