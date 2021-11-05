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
                <div className="first"> 
                    <div className="inputSetup"> 
                        <label> </label>
                        <input />
                    </div>
                    <div className="inputSetup"> 
                        <label> </label>
                        <input />
                    </div>
                </div>
                <div className="second"> 
                    <div className="inputSetup"> 
                            <label> </label>
                            <input />
                    </div>
                    <div className="inputSetup"> 
                        <label> </label>
                        <input />
                    </div>
                    <div className="inputSetup"> 
                        <div className="dateGroup">
                            <label> </label>
                            <input />
                        </div>
                        <div className="dateGroup">
                            <label> </label>
                            <input />
                        </div>
                    </div>
                </div>
            </div> 
            <div> <Botao> ADICIONAR EVENTO </Botao></div>
        </Container>
    )
}  