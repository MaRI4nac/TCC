import styled from 'styled-components'; 

const Container = styled.div`
    background-color: #2F4F4F; 
    height: 100vh; 
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center; 

    .NewEvent{
        display: flex; 
        flex-direction: row; 
        color: white; 
        justify-content flex-start;
        align-items: center; 
    }

    .NewEvent > img {
        width: 30px;
        height: 30px;
        margin: 0px 20px 0px 30px;   
    }

    .BoxInputs {
        background: rgba(255, 255, 255, 0.08); 
        width: 80%; 
        height: 70%; 
        display: flex;
        flex-direction: column; 
        justify-content: center;
        aling-items: center;  

        margin-bottom: 2.5%; 
    }

    input { 
        padding: 8px 20px; 
        background-color: white; 
        margin-right: 20px; 
        border: none; 
    }

    .Inputs {
        display: flex; 
        flex-direction: row; 
        color: white; 
        font-size: 1.5em; 
    }

    .InputLabel {
        display: flex; 
        flex-direction: column; 
    }

    label {
        padding-bottom: 1%; 
        padding-top: 15%; 
    }

    .BoxInputs-Margin {
        margin: 0% 5%; 
    }

    .InputBackground, .InputImageSecondary {
        width: 20vh; 
    }

    textarea {
        resize: none; 
        width: 45vh;
        height: 20vh; 
    }
`
    