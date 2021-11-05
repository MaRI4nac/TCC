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
        justify-content: flex-start;
        align-items: center; 
    }

    .NewEvent > img {
        width: 30px;
        height: 30px;
        margin: 0px 20px 0px 30px;   
    }

    .BoxInputs {
        background: rgba(255, 255, 255, 0.08); 
        max-width: 1440px;
        width: 90%;
        height: 70%; 
        margin-bottom: 2.5%; 
    }
    
`
    

export { Container }