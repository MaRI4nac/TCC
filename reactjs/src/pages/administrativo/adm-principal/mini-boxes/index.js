import { Link } from "react-router-dom"
import { Box } from "./styled"


export default function ADMiniBox (props) {
    return (
        <Box>
            <div class="mini-image">
                <img src={props.image} alt="" width="150px" height="150px" />
            </div>
            <div class="mini-title"> {props.title} </div>
            <div class="mini-description"> {props.descript} </div>
        </Box>
    )
}