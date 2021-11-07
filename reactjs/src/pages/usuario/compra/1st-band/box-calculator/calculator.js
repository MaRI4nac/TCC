import { useEffect, useState } from "react"
import { Cont } from "../styled";

export default function Calculator (props) {

    const[qtd, SetQtd] = useState(props.value);


    function somar () {
        
        if(qtd === 10)
        return;

        props.onValueChange("somar")
        SetQtd(qtd + 1)
    }

    function subtrair () {

        if(qtd <= 0 )
        return;

        props.onValueChange("sub")
        SetQtd(qtd - 1)
    }

    useEffect(() => {
        props.onChange(qtd)
    }, [qtd])


    return (
        <Cont>
                <button onClick={subtrair}> - </button>
                <div class="calculator-qtd"> {qtd} </div>
                <button onClick={somar}> + </button>
        </Cont>
    )
}

