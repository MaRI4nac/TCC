import Cabecalho from '../../../components/cabecalho'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import DirBox from '../busca-direcionada/dir-box'

import Api from '../../../service/apiEvent.js'
const api = new Api();

export default function Principal() {

    const [test, setTest] = useState([]);

    async function listar () {
        let r = await api.highlightedEvents();
        console.log(r)
        setTest(r);
    }
    
    useEffect(() => {
        listar();
    }, [])


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
                    <div className="box-theme"> 
                        <img src="/assets/images/pecasEvento.svg" alt=""/> 
                        <p> A expressão da arte através da atuação. Clique aqui para ver mais sobre: </p>
                        <Link to="/buscadirecionada?categoria=3" className="Blink"> 
                            <button> peças </button> 
                        </Link>
                    </div>
                    <div className="box-theme"> 
                        <img src="/assets/images/showsEvento.svg" alt=""/> 
                        <p> A expressão da arte através da atuação. Clique aqui para ver mais sobre: </p>
                        <Link to="/buscadirecionada?categoria=4" className="Blink" > <button> shows </button> </Link>
                    </div>
                    <div className="box-theme"> 
                        <img src="/assets/images/museusEvento.svg" alt=""/> 
                        <p> A expressão da arte através da atuação. Clique aqui para ver mais sobre: </p>
                        <Link to="/buscadirecionada?categoria=5" className="Blink" > <button> museus </button> </Link>
                    </div>
                </div>
                <div className="principal"> 
                    <div className = "Eventos"> 
                        <h1> EVENTOS EM DESTAQUE </h1>
                    </div>
                    <div> 
                        {/* { test.map((item) => 
                            <DirBox info={item} />
                        )} */}
                    </div>
                    <button className="marginbutton"> MAIS EVENTOS EM DESTAQUE </button> 
                </div>
                <div className="rodape"> 
                    <img src="/assets/images/redesSociais1.png" alt="" />
                    <Link to='/admlogin'> <img src="/assets/images/LOGO TCC - de ladinho.svg" alt="" /> </Link> 
                    <img src="/assets/images/redesSociais2.png" alt="" />
                </div>
           </div>
        </Container>
    )
}