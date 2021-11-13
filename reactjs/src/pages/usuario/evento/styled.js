import styled from "styled-components";

const EventTypeStyle = styled.div`

    display: flex;
    flex-direction: column;
    background-color: rgba(18, 61, 61);
    min-height: 100vh;
    width: 100%;


.ct-color {
    background-color: rgba(18, 61, 61);
    color: white;
    font-size: 1.1em;
}

.first-band {
    background-image: url('${(props) => props.background}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 25%;
    height: 21em;
    position: relative;
    display: flex;
    display: column;
}

.principal-image-title {
    position: absolute;
    top: 10em;
    left: 20em;
    display: flex;
    flex-direction: row;

}

.princ-texts {
    margin-left: 0.8em;
    margin-top: 5em;
}

.p-title {
    margin-bottom: 2em;
    font-size: 2em;
    width: 500px;

    text-align: center;
    font-weight: 800;
}


.second-band {
    margin-top: 6em;
    
    padding: 3em 3em;
}

.informations-about {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
}

.line-information {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
}

.icon-information {

}

.desc-information {
    margin-left: 1em;
}



.third-band {
    padding: 1em 1em;
    display: flex;
    justify-content: center;
}

`

export { EventTypeStyle }