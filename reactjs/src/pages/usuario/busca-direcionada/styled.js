import styled from 'styled-components'

const Container = styled.div`
    background-color: rgb(18, 61, 61, 0.8);
    min-height: 100vh;
    width: 100%;
    color: white;

    .secondary-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5% 10% 5% 5%;
    }

    .background-sphere {
        text-transform: uppercase;
        text-align: center;
        background: rgba(18, 61, 61, 0.5);
        border-radius: 50%;
        height: 15rem;
        width: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 5%;
        margin-top: 3%;
    }

    .background-sphere img {
        height: auto;
        width: 50%;
    }

    h1 {
        font-size: 1.6rem;
    }

    .box {
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-bottom: 4rem;

        max-width: 1080px;
        background: rgba(196, 196, 196, 0.2);
        padding: 2.5rem;
    }

    .box:last-child {
        margin-bottom: 0px;
    }

    .box img {
        padding-right: 4rem;
    }

    .box-text {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box-text p {
        font-size: 1.10em;
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
    .box-text div {
        text-align: center;
    }

    .Blink {
        text-decoration: none;
        color: black;
    }
    
`

export { Container }