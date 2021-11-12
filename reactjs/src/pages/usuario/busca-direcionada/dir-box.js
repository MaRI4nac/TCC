import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

export default function DirBox (props) {
    const ref = useRef(null);

    const [event, setEvent] = useState(props.info);

    function hourFormat(hour) {
        let c = hour.substr(0,2);

        let b = hour.substr(3,3).substr(0,2);

        let d = parseInt(c) * 60 + parseInt(b);

        return d;

    }

    function yearFormat(old) {
        var e = old.substr(0,2);
        return e;
    }

    return (
        
        <div className="box"> 
            <ToastContainer> </ToastContainer>
            <LoadingBar color='#f11946' ref={ref} />
            <img src={event.imagemcapa} alt="" width="250px" height="300px" />
                <div className="box-text"> 
                    <h1> {event.nomevento} </h1>
                    <div> {`${event.gênero}, ${hourFormat(event.duracao)} minutos, ${yearFormat(event.classificacao)} anos.`} </div>
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