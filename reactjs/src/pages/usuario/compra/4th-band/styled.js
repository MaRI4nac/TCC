import styled from "styled-components";

const FaixaQuatro = styled.div`


    display: flex;
    flex-direction: column;

    padding: 2em;


.band-previa {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.title {
    text-align: center;
    text-transform: uppercase;
    font-size: 2em;

    margin-bottom: 2em;
}

`

const ThatsPrevia = styled.div`


    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.4);
    width: 40em;
    justify-content: center;
    align-items: center;
    border-radius: 0.6em;

    margin-bottom: 1em;


.ticket-icon {
    margin-right: 2em;
}

.tkt-inf {
    font-size: 1.1em;
}

`

export { ThatsPrevia, FaixaQuatro }

