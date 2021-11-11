
import DateTimeBox from "./datetime-box";
import { FaixaDois } from "./styled";
import Api from "../../../../service/apiBuy";
import { useEffect, useState } from "react";
import { Botao } from "../../../../components/botoes/styled";
const api = new Api();

export default function BuySecondBand (props) {
    const informations = props.info;
    const [data, setData] = useState([]);
    const [hours, setHours] = useState([]);
    
    const updateFieldDate = (date, i) => {
        props.updateFieldDate(date, i)
    }

    const updateFieldHour = (hour, i) => {
        props.updateFieldHour(hour, i)
    }

    let gambiarraPraMapear = []
    for (var i = 0; i < informations.qtd; i++) {
        gambiarraPraMapear.push(i);
    }

    const getDates = async () => {
        let r = await api.getDates(props.idEvent)
        console.log(r)
        setData(r);
    }

    const updateHours = (value, where) => {
        props.updateFieldHour(value, where)
    }
    
    useEffect(() => {
        getDates()
    }, [])
    

    return (
        <FaixaDois>
            <div class="title"> Comprar Ingresso </div>
            <div class="first-box-scheme">
                <div class="column">
                    <div class="scheme-input1">
                        <div class="scheme-title"> Evento: </div>
                        <input type="text" value={informations.evento} readOnly/>
                    </div>
                    <div class="scheme-input">
                        <div class="scheme-title"> Comprador: </div>
                        <input type="text" value={informations.comprador} readOnly/>
                    </div>
                </div>
                <div class="column">
                    <div class="scheme-input1">
                        <div class="scheme-title1"> Valor: </div>
                        <input type="text" value={informations.valor} readOnly/>
                    </div>
                    <div class="scheme-input">
                        <div class="scheme-title"> E-mail: </div>
                        <input type="text" value={informations.email} readOnly/>
                    </div>
                </div>
                <div class="column">
                    <div class="scheme-input1">
                        <div class="scheme-title2"> Categoria: </div>
                        <input type="text" value={informations.categoria} readOnly/>
                    </div>
                    <div class="scheme-input">
                        <div class="scheme-title"> CPF: </div>
                        <input type="text" value={informations.cpf} readOnly/>
                    </div>
                </div>

            </div>
            <div class="second-box-scheme">
                {gambiarraPraMapear.map((item, i) => {
                   return <DateTimeBox key={item} datas={data} updateHourField={updateHours} chave={i}/>
                })}
            </div>
            <div className="buttonwidht"> 
            <Botao onClick={props.updateScreen}> Prosseguir </Botao>
        </div>
        </FaixaDois>
    )
}