import styled from 'styled-components'

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center; 

    align-items: center;
    height: 100vh; 

    background-color: #2F4F4F;
    background-image: url('/assets/images/LOGO TCC - P3 NWS 3.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40%; 

    .Box-forgotPass {
        display: flex; 
        flex-direction: column; 
        align-items: center;  

        width: 80vh; 
        height: 48vh; 
        
        border-style: outset;
        border: 5px solid #ADD8E6; 
    } 

    .Title {
        color: #ADD8E6;
        font-size: 2em; 

        text-transform: uppercase;
        padding: 65px 0px 50px 0px;

        text-align: center;   
        font-weight: bold;
    }

    .Text { 
        color: #ADD8E6;
        font-size: 1em;
        width: 60vh; 
        text-align:center;
        padding-bottom: 50px;  
    }

    .E-mail > input {
        margin-bottom: 35px; 
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

    .Blink {
        text-decoration: none;
        color: black;
    }

`

export {Container }