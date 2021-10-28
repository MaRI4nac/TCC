import { Link } from 'react-router-dom'

export default function DirBox (props) {
    return (
        <div className="box"> 
            <img src="/assets/images/principal-box.png" alt="" width="300px" height="300px" />
                <div className="box-text"> 
                    <h1> Cada Um Tem o Anjo Que Merece </h1>
                    <div> Comédia, 80 minutos, 12 anos. </div>
                    <p> <b> Sinopse: </b> 
                        Nesta comédia, o casal, Osvaldo e Quitéria, vive às turras, brigando e se desentendendo a todo momento, por qualquer motivo. Os dois estão nos seus limites e prestes a se separarem quando algo surpreendente acontece. Lá no céu os Deuses decidem que eles merecem uma atenção especial para ajudar a refazer esse amor tão desgastado pelo tempo. Dirigida por Wesley Leal.
                    </p>
                    <Link to="/eventos" className="Blink"> <button> SAIBA MAIS </button> </Link>
                </div>
        </div>
    )
}