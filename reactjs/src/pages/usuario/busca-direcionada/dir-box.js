import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function DirBox (props) {

    const [event, setEvent] = useState(props.info);

    return (
        
        <div className="box"> 
            <img src={event.imagemcapa} alt="" width="300px" height="300px" />
                <div className="box-text"> 
                    <h1> {event.nomevento} </h1>
                    <div> {`${event.gênero}, ${event.duracao}, ${event.classificacao} anos.`} </div>
                    <p> <b> Sinopse: </b> 
                        {event.sinopse.length > 590 
                            ? event.sinopse.substr(0,590) + '...'
                            : event.sinopse }
                    </p>
                    <Link to={{
                        pathname: '/eventos',
                        state: props.info }}> 
                            <button> SAIBA MAIS </button> 
                    </Link>
                </div>
        </div>
    )
}