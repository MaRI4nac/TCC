import { StyledDateTime } from "./styled";
import Api from "../../../../service/apiBuy";
const api = new Api();

export default function DateTimeBox () {
    

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
                        <select name="" id="0">
                            <option value="0" class="op-dif"> Datas disponíveis... </option>
                            <option value="1"> 20/12/2021 </option>
                            <option value="2">21/12/2021</option>
                            <option value="3">22/12/2021</option>
                            <option value="4">23/12/2021</option>
                            <option value="5">24/12/2021</option>
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
                        <select name="" id="0">
                            <option value="0" class="op-dif"> Datas disponíveis... </option>
                            <option value="1"> 20/12/2021 </option>
                            <option value="2">21/12/2021</option>
                            <option value="3">22/12/2021</option>
                            <option value="4">23/12/2021</option>
                            <option value="5">24/12/2021</option>
                        </select>
                </div>
            </div>
        </StyledDateTime>
    )
}