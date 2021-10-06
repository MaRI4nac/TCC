import styled from 'styled-components'

const Container = styled.div`

    .header {
        background-image: url('https://i.pinimg.com/564x/68/49/e1/6849e1d9c30b32dc20035a70945762e9.jpg');
        display: flex;
        flex-direction: column;
        align-items: center;

        background-position: center;
        background-size: 100% auto;
        background-attachment: fixed; 
        background-repeat: no-repeat; 
        height: 90vh;
    }

    .bg-white {
        background: #2F4F4F;
        width: 50vh;
        height: 50vh;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;

        margin: 12rem 0px;
    }

    .bg-white img {
        height: 100%;
        width: 100%;
        fill: white;
    }

    .body {
        background: linear-gradient(180deg, rgba(23, 61, 64, 0.92) 0%, rgba(23, 61, 64, 0.899224) 18%, rgba(47, 79, 79, 0.874) 43.42%, rgba(47, 79, 79, 0.874) 43.42%);
        min-height:100vh;
    }
    
    .themes {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 3rem;
    }

    .box {
        width: 11%;
        text-align: center;
        width: 18em;

    }

    .box img {
        height: 15vh;
        width: auto;
    }

    .box p {
        color: white;
    }

    button {
        border: none;
        border-radius: 5em;
        padding: 0.6em 3em;
        background-color: #F0F8FF;
        color: black;
        font-family: Roboto;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 0.9em;

        cursor: pointer;
    }

    .principal {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .principal h1 {
        margin: 5rem 0px 3rem 0px;
    }

    .box-principal {
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-bottom: 4rem;

        max-width: 1080px;
    }

    .box-principal:last-child {
        margin-bottom: 0px;
    }

    .box-principal img {
        padding: 0px 3rem ;
    }

    .box-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .box-text p {
        font-size: 1.15em;
    }

    .box-text h1 {
        margin: 0px;
        text-align: center; 
    }

    .box-text button {
        display: flex;
        background-color: #F0F8FF;
        border-radius: 25px;
        outline: none;
        border: none;
        color: black;
        font-weight: bold;
        font-size: 1em;
        padding: 10px 3rem;
    }
 
    .marginbutton {
        margin-bottom: 5rem;
    }

    .box-text div {
        text-align: center;
    }

    .rodape {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        background: rgba(47, 79, 79, 0.89);
        padding: 2rem 0px;
    }

    .rodape img {
        height: 7.5vh;
        width: auto;
    }
`

export { Container }