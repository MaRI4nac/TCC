import React, { useState } from "react"

import Api from '../../../../service/apiUsers'
const api = new Api(); 

export default function Perfil(props) { 
    
    const [ perfil, setPerfil ] = useState([]); 

    async function Perfil() { 
        const resp = await api.userLogin()
        console.log(resp); 
        setPerfil(resp); 
    }

    return( 
        <> 
            <div className="Name"> {perfil.usuario} Usuario </div>
            <div className="CPF"> {perfil.id} </div>
            <div className="Email"> </div>
            <div className="DataNascimento"> </div>
            <div className="Name"> </div>
        </> 
    )
}