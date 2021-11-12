import { StyledDateTime } from "./styled";
import Api from "../../../../service/apiBuy";
import { useEffect, useState } from "react";
const api = new Api();

export default function DateTimeBox (props) {

    const [currentDate, setCurrentDate] = useState();
    const [currentHour, setCurrentHour] = useState();
    const [hours, setHours] = useState([]);

    const getHours = async () => {
        let r = await api.getHours(currentDate)
        setHours(r)
    }

    useEffect(() => {
        getHours()
    }, [currentDate])

    useEffect(() => {
        props.updateHourField(currentHour, props.chave)
    }, [currentHour])


    const dateFormat = (data) => {
        let data1 = data.substr(0, 10)
        data1 = data1.split('-')
        return `${data1[2]}/${data1[1]}/${data1[0]}`
    }

    return (
        <StyledDateTime>
            <div class="box-image-event">
                <div class="circle">
                    <div class="ticket-image">
                        <img src="/assets/images/ticket-event.png" alt="" width="150em" height="150em" />
                </div>
            </div>
            </div>
            <div class="box-datetime">
                <div class="start-box">
                    <div class="start-box-title">
                        <div class="st-box-title-icon">
                            <img src="/assets/images/calendar.png" alt="" width="40em" height="40em" />
                        </div>
                        <div class="st-box-title"> Datas disponíveis </div>
                    </div>
                    <div class="start-box-choose"> Selecione a data desejada </div>
                        <select name="" id="0" onChange={(e) => setCurrentDate((e.target.value))}>
                            <option defaultValue="selected"> Selecione uma data... </option>
                            {props.datas.map((item, i) => {
                                return <option key={i} value={item.id_calendario}> {dateFormat(item.dt_evento)} </option>
                            })}
                        </select>
                </div>
                <div class="start-box">
                    <div class="start-box-title">
                        <div class="st-box-title-icon">
                            <img src="/assets/images/hour.png" alt="" width="40em" height="40em" />
                        </div>
                        <div class="st-box-title"> Horários disponíveis </div>
                    </div>
                    <div class="start-box-choose"> Selecione o horário desejado </div>
                        <select name="" id="0" defaultValue="selected" onChange={(e) => setCurrentHour((e.target.value))}>
                            <option selected="selected"> Selecione um horário... </option>
                            {console.log(hours)}
                            {!hours ? <div> </div> : hours.map((item, i) => {
                                return <option key={i} value={item.id_calendario_item}> {item.hr_evento} </option>
                            })}

                        </select>
                </div>
            </div>
        </StyledDateTime>
    )
}