import { Botao } from "../../../components/botoes/styled";
import { ITsProfile } from "./styled";

export default function UserProfile () {
    return (
        <ITsProfile>
            <div class="header"></div>
            <div class="the-band">
                <div class="user-image"> <img src="/assets/images/profilePhoto.png" alt="" width="250px" height="250px" /> </div>
                <div class="user-general-informations">
                    <div class="first-box">
                        <div class="profile-name"> Yami </div>
                        <div class="profile-user"> @IMTHEROSE </div>
                    </div>
                    <div class="second-box">
                        <div class="information"> <b> Nome: </b> Yumi Fokki </div>
                        <div class="information"> <b> Data de nascimento: </b> 26/08/1999 </div>
                        <div class="information"> <b> E-mail: </b> yamit0mat00@gmail.com </div>
                        <div class="information"> <b> Senha: </b> ********** </div>
                        <div class="information"> <b> Frequência: </b> 75% </div>
                    </div>

                    <div class="butbutbut">
                        <Botao> Alterar Informações </Botao>
                    </div>
                    
                </div>
            </div>
        </ITsProfile>
    )
}