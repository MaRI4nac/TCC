import Cabecalho from '../../../components/cabecalho'
import { Container } from './styled'
import { Link } from 'react-router-dom'

let eventSimulation = {

    "nmEvento": "Cada Um Tem o Anjo Que Merece",
    "categoria": "Comédia",
    "duracao": "00:01:20",
    "classificacao": 12,
    "valorIngresso": 70.00,
    "local": "Rua bem te vi",
    "dtMin": "2021-10-23",
    "dtMax": "2021-11-23",
    "elenco": "diretor: levy",
    "descEvento": "Nesta comédia, o casal, Osvaldo e Quitéria, vive às turras, brigando e se desentendendo a todo momento, por qualquer motivo. Os dois estão nos seus limites e prestes a se separarem quando algo surpreendente acontece. Lá no céu os Deuses decidem que eles merecem uma atenção especial para ajudar a refazer esse amor tão desgastado pelo tempo. Dirigida por Wesley Leal.",
    "imgCapa": "/assets/images/principal-box.png",
    "imgFundo": "/assets/images/principal-box.png",
    "imgSec": "/assets/images/principal-box.png",
    "datas": [
        {"data": "2020-10-10",
            "horarios": [
                "10:15", "15:30"
            ]
        },
        {"data": "2020-10-15",
            "horarios": [
                "10:15", "15:30"
            ]
        },
        {"data": "2020-10-05",
            "horarios": [
                "10:15", "15:30"
            ]
        }
    ]
}

export default function Principal() {
    return (
        <Container>
         <Cabecalho />
           <div className="header"> 
                <div className="bg-white"> 
                    <img src="/assets/images/logo TCC com escrita.svg" alt="" />
                </div>
           </div>
           <div className="body"> 
                <div className="themes"> 
                    <div className="box"> 
                        <img src="/assets/images/pecasEvento.svg" alt=""/> 
                        <p> A expressão da arte através da atuação. Clique aqui para ver mais sobre: </p>
                        <Link to="/buscadirecionada?categoria=3" className="Blink"> 
                            <button> peças </button> 
                        </Link>
                    </div>
                    <div className="box"> 
                        <img src="/assets/images/showsEvento.svg" alt=""/> 
                        <p> A expressão da arte através da atuação. Clique aqui para ver mais sobre: </p>
                        <Link to="/buscadirecionada?categoria=4" className="Blink" > <button> shows </button> </Link>
                    </div>
                    <div className="box"> 
                        <img src="/assets/images/museusEvento.svg" alt=""/> 
                        <p> A expressão da arte através da atuação. Clique aqui para ver mais sobre: </p>
                        <Link to="/buscadirecionada?categoria=5" className="Blink" > <button> museus </button> </Link>
                    </div>
                </div>
                <div className="principal"> 
                    <div className = "Eventos"> 
                        <h1> EVENTOS EM DESTAQUE </h1>
                    </div>
                    <div className="box-principal"> 
                        <img src="/assets/images/principal-box.png" width="400px" height="400px" alt="" />
                        <div className="box-text"> 
                            <h1> Cada Um Tem o Anjo Que Merece </h1>
                            <div> Comédia, 80 minutos, 12 anos. </div>
                            <p> <b> Sinopse: </b> 
                                Nesta comédia, o casal, Osvaldo e Quitéria, vive às turras, brigando e se desentendendo a todo momento, por qualquer motivo. Os dois estão nos seus limites e prestes a se separarem quando algo surpreendente acontece. Lá no céu os Deuses decidem que eles merecem uma atenção especial para ajudar a refazer esse amor tão desgastado pelo tempo. Dirigida por Wesley Leal.
                            </p>
                            <Link to={
                                {
                                    pathname: '/eventos',
                                    state: {
                                        info: eventSimulation
                                    }
                                }
                            } className="Blink" > <button> SAIBA MAIS </button> </Link>
                        </div>
                    </div>
                    <div className="box-principal"> 
                        <div className="box-text"> 
                            <h1> Cada Um Tem o Anjo Que Merece </h1>
                            <div> Comédia, 80 minutos, 12 anos. </div>
                            <p> <b> Sinopse: </b> 
                                Nesta comédia, o casal, Osvaldo e Quitéria, vive às turras, brigando e se desentendendo a todo momento, por qualquer motivo. Os dois estão nos seus limites e prestes a se separarem quando algo surpreendente acontece. Lá no céu os Deuses decidem que eles merecem uma atenção especial para ajudar a refazer esse amor tão desgastado pelo tempo. Dirigida por Wesley Leal.
                            </p>
                            <Link to={
                                {
                                    pathname: '/eventos',
                                    state: {
                                        info: eventSimulation
                                    }
                                }
                            } className="Blink" > <button> SAIBA MAIS </button> </Link>
                        </div>
                        <img src="/assets/images/principal-box.png" width="400px" height="400px" alt="" />
                    </div>
                    <button className="marginbutton"> MAIS EVENTOS EM DESTAQUE </button> 
                </div>
                <div className="rodape"> 
                    <img src="/assets/images/redesSociais1.png" alt="" />
                    <img src="/assets/images/LOGO TCC - de ladinho.svg" alt="" />
                    <img src="/assets/images/redesSociais2.png" alt="" />
                </div>
           </div>
        </Container>
    )
}