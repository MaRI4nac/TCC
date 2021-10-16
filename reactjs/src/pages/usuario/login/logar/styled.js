import styled from 'styled-components';

const Log = styled.div `

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url("/assets/images/fundo-tela-login.svg");
    background-size: 100%;
    height: 100vh;

    padding: 2em 2em;
    color:#ADD8E6;

.tela-login {
    display: flex;
    flex-direction: column;
    padding: 3em 8em;
    background: rgba(47, 79, 79, 0.8);
    border: 0.4em solid #ADD8E6;
    justify-content: center;

    width: 50em;
    height: 30em;
}

.acess-buttons {
    display: flex;
    flex-direction: column;
    
}

.log-titulo {
    text-align: center;
    font-size: 2.3em;
    text-transform: uppercase;
    color: #ADD8E6;

    margin-bottom: 1em;
}

.log-digit {
}

.log-inputs {
    display: flex;
    flex-direction: column;
}

input {
    border: none;
    background: rgba(112, 128, 144, 0.4);
    border-radius: 8px;
    width: 40em;
    padding: 1em 1em;
    margin: 0.3em;
}

 input::placeholder {
    color:#ADD8E6;
    padding-left: 1em;
    font-size: 1em;
    font-weight: 700;
}

input:focus {
    color: #ADD8E6;
    padding-left: 1em;
}

.log-esqueci-senha {
    display: flex;
    justify-content: flex-end;
    text-decoration: underline;
    margin-bottom: 1em;
    font-size: 0.8em;
}

.log-botoes {
    display: flex;
    flex-direction: column;
}

.log-nao-tem-conta {
    margin-bottom: 0.2em;
    font-size: 0.8em;
}

.log-bot-bot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

`

export { Log }
