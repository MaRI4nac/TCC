import { Botao } from '../../../components/botoes/styled'
import { PrincipalPart } from './styled'
import { Link } from 'react-router-dom'
import ADMiniBox from './mini-boxes'

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
                    <Botao class="but-bit"> <Link to="/relatorios" className="Elink"> Ver mais relatórios </Link> </Botao>
                </div>
            </div>
        </div>
        <div class="second-band">
            <div class="title"> Gerenciamento Geral </div>
            <div class="events-users-tickets">
                <Link to="/crud" className="Wlink"> <ADMiniBox image="/assets/images/events.svg" title="Eventos" descript="30 eventos registrados"/> </Link>
                <Link to ="usuario" className="Wlink"> <ADMiniBox image="/assets/images/tickets.svg" title="Usuários" descript="30 usuários registrados" /> </Link>
                <Link to="/compra" className="Wlink"> <ADMiniBox image="/assets/images/users.svg" title= "Ingressos" descript="20 ingressos aguardando confirmação" /> </Link>
            </div>
        </div>
    </PrincipalPart>
    )
}