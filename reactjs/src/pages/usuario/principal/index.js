import Cabecalho from '../../../components/cabecalho'
import { Container } from './styled'

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
                        <button> peças </button>
                    </div>
                    <div className="box"> 
                        <img src="/assets/images/showsEvento.svg" alt=""/> 
                        <p> A expressão da arte através da atuação. Clique aqui para ver mais sobre: </p>
                        <button> shows </button>
                    </div>
                    <div className="box"> 
                        <img src="/assets/images/museusEvento.svg" alt=""/> 
                        <p> A expressão da arte através da atuação. Clique aqui para ver mais sobre: </p>
                        <button> museus </button>
                    </div>
                </div>
                <div className="principal"> 
                    <h1> EVENTOS EM DESTAQUE </h1>
                    <div className="box-principal"> 
                        <img src="/assets/images/principal-box.png" alt="" />
                        <div className="box-text"> 
                            <h1> Cada Um Tem o Anjo Que Merece </h1>
                            <div> Comédia, 80 minutos, 12 anos. </div>
                            <p> <b> Sinopse: </b> 
                                Nesta comédia, o casal, Osvaldo e Quitéria, vive às turras, brigando e se desentendendo a todo momento, por qualquer motivo. Os dois estão nos seus limites e prestes a se separarem quando algo surpreendente acontece. Lá no céu os Deuses decidem que eles merecem uma atenção especial para ajudar a refazer esse amor tão desgastado pelo tempo. Dirigida por Wesley Leal.
                            </p>
                            <button> SAIBA MAIS </button>
                        </div>
                    </div>
                    <div className="box-principal"> 
                        <div className="box-text"> 
                            <h1> Cada Um Tem o Anjo Que Merece </h1>
                            <div> Comédia, 80 minutos, 12 anos. </div>
                            <p> <b> Sinopse: </b> 
                                Nesta comédia, o casal, Osvaldo e Quitéria, vive às turras, brigando e se desentendendo a todo momento, por qualquer motivo. Os dois estão nos seus limites e prestes a se separarem quando algo surpreendente acontece. Lá no céu os Deuses decidem que eles merecem uma atenção especial para ajudar a refazer esse amor tão desgastado pelo tempo. Dirigida por Wesley Leal.
                            </p>
                            <button> SAIBA MAIS </button>
                        </div>
                        <img src="/assets/images/principal-box.png" alt="" />
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