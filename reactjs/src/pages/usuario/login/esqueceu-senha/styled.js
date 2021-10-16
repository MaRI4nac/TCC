import styled from 'styled-components'

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center; 

    align-items: center;
    height: 100vh; 

    background-image: url('https://i.pinimg.com/564x/fe/71/77/fe7177975e95d743d58ce9752a5e7dd7.jpg');
    background-size: 100%;
    background-repeat: no-repeat;

    .Box-forgotPass {
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center;  

        background: rgba(47,79,79,0.55);
        border-radius: 20% 0;
        box-shadow: 1px 2px 5px rgba(47,79,79,0.7), 2px 4px 25px rgba(47,79,79,0.7);
        padding: 2em 7em;
    } 

    .Logo {
        background-image: url('/assets/images/LOGO TCC - P3 NWS 3.svg');
        background-size: 100% 100%;
    }

    .Title {
        color: white;
        font-size: 2em; 

        text-transform: uppercase;
        padding: 1.1em 0em 0.5em 0em;

        text-align: center;   
        font-weight: 900;
    }

    .Text { 
        color: white;
        font-size: 1em;
        width: 60vh; 
        text-align:center;
        padding-bottom: 50px; 
        opacity: 0.8;  
    }

    .E-mail > input {
        margin-bottom: 35px; 
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
        padding-left: 1em;
        font-size: 1em;
        font-weight: 450;
    }
    
    input:focus {
        color: white;
        padding-left: 1em;
    }

`

export {Container }