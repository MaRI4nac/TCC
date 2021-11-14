import styled from 'styled-components'

const Container = styled.div`
    background: #2F4F4F;
    min-height: 100vh;
    color: white;
    padding: 5% 10% 5% 10%;

    h1 {
        margin-top: 0px;
        display: flex;
        justify-content: center;
        margin-bottom: 4rem;
    }

    input {
        background: rgba(196, 196, 196, 0.3);
        outline: none;
        border: 0px solid transparent;
        height: 100%;
        border-radius: 5px;
        width: 35vh;
        color: white;
        padding-left: 15px;

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: rgba(255, 255, 255, 0.5);
            opacity: 1; /* Firefox */
            
        }


        :first-child {
            margin-right: 3rem;
        }
    }

    a {
        text-decoration: none;
        text-transform: none;
    }

    .inputs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    table {
        width: 100%;
        background: rgba(255, 255, 255, 0.05);
        border-collapse: collapse;
    }

    .cor-alternada {
        background: black;
    }
`

export { Container }