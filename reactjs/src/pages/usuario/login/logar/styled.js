import styled from 'styled-components';

const Log = styled.div `

    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url("https://i.pinimg.com/564x/fe/71/77/fe7177975e95d743d58ce9752a5e7dd7.jpg");
    background-size: 100%;
    height: 100vh;

    padding: 13em 5em;
    color:#ADD8E6;

.Logo {
    background-image: url('/assets/images/LOGO TCC - P3 NWS 3.svg');
    background-size: 100% 100%;
}

    
.tela-login {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: rgba(47,79,79,0.7);
    border-radius: 20% 0;
    box-shadow: 1px 2px 5px rgba(47,79,79,0.7), 2px 4px 25px rgba(47,79,79,0.7);
    padding: 2em 7em;
}

.acess-buttons {
    display: flex;
    flex-direction: column;
    
}

.log-titulo {
    text-align: center;
    font-size: 2.3em;
    font-weight: 900;
    text-transform: uppercase;
    color: white;

    margin-bottom: 1em;
}

.log-inputs {
    display: flex;
    flex-direction: column;
}

input {
    border: none;
    background: transparent;
    outline: none; 
    border-bottom: 4px solid #2F4F4F; 
    width: 40em;
    padding: 1em 1em;
    margin-bottom: 1em;
    font-family: Roboto;
    color: white;
}

 input::placeholder {
    color: white;
    opacity: 0.6; 
    padding-left: 1em;
    font-size: 1.1em;
    font-weight: 450;
}

input:focus {
    color: white;
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
