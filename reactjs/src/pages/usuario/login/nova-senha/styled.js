import styled from 'styled-components';

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

    .Box-password {
        display: flex; 
        flex-direction: column; 
        align-items: center;  

        width: 75vh; 
        height: 45vh; 
        
        border-style: outset;
        border-color:  #ADD8E6; 
    }

    .Title {
        color: #ADD8E6;
        font-size: 2em; 

        text-transform: uppercase;
        padding: 65px 0px 20px 0px;

        text-align: center;   
        font-weight: bold;
    }


    .Inputs {
        display: flex; 
        flex-direction: column; 
        align-items: center; 

        div {
            color: #ADD8E6;
            
            :nth-child(2) {
                margin-bottom: 15px;
            }
        }
    }


    .Inputs > input {
        border: none;
        background: rgba(112, 128, 144, 0.4);
        border-radius: 8px;
        width: 40em;
        padding: 1em 1em;
        margin: 0.3em;
        outline: none;
        border: 1px solid transparent;
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

    .Warning {
        display: flex; 
        padding: 3% 0% 3% 0%;  
        color: #ADD8E6; 
        font-size: 1em; 
       

    }

    .Blink {
        text-decoration: none;
        color: black;
    }

`

const Button = styled.button`
    background-color: white; 
    border: 2px solid #ADD8E6; 
    border-radius: 15px; 
    padding: 10px 45px; 
` 

export {Container, Button }