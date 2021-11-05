import Cookies from "js-cookie";
import { Botao } from "../../../components/botoes/styled";
import { ITsProfile } from "./styled";
import { useHistory } from "react-router-dom"

export default function UserProfile () {
    const nav = useHistory();

    const deslogar = () => {
        Cookies.remove('usuario-logado');
        nav.push('/inicial')
    }

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
                    <div className="butbutbut"> <Botao onClick={() => deslogar()}> Log off </Botao></div>
                    
                </div>
            </div>
        </ITsProfile>
    )
}