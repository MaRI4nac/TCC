import { Botao } from '../../../components/botoes/styled'
import { PrincipalPart } from './styled'

export default function ADMPrincipal () {
    return (
        <PrincipalPart>
        <div class="first-band">
            <div class="transparent-band">
                <div class="title"> Relatório Semanal </div>
                <div class="graphics">
                    <img src="/assets/images/graphic.svg" alt="" width="300px" height="300px"/>
                </div>

                <div class="buttons">
                    <Botao class="but-bit"> Ver em detalhes </Botao>
                    <Botao class="but-bit"> Ver mais relatórios </Botao>
                </div>
            </div>
        </div>
        <div class="second-band">
            <div class="title"> Gerenciamento Geral </div>
            <div class="events-users-tickets">
                <div class="mini-box1">
                    <div class="mini-image">
                        <img src="/assets/images/events.svg" alt="" width="150px" height="150px" />
                    </div>
                    <div class="mini-title"> Eventos </div>
                    <div class="mini-description"> 30 eventos registrados. </div>
                </div>
                <div class="mini-box">
                    <div class="mini-image">
                        <img src="/assets/images/tickets.svg" alt="" width="150px" height="150px" />
                    </div>
                    <div class="mini-title"> Usuários </div>
                    <div class="mini-description"> 30 usuários registrados. </div>
                </div>
                <div class="mini-box">
                    <div class="mini-image">
                        <img src="/assets/images/users.svg" alt=""width="150px" height="150px" />
                    </div>
                    <div class="mini-title"> Ingressos </div>
                    <div class="mini-description">20 ingressos aguardando confirmação <br /> 10 ingressos aprovados</div>
                </div>
            </div>
        </div>
    </PrincipalPart>
    )
}