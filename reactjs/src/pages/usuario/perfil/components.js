import { useEffect, useState } from "react"
import { Inputs } from "./components-styled"

export default function AgpInputs (props) {

    return(
        <Inputs>
            <label> {props.label} </label>
            <input type={props.type} value={props.value} onChange={props.onChange}/>
        </Inputs>
    )
}