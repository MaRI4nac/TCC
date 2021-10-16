import styled from 'styled-components'

const Container = styled.div`
    background: #2F4F4F;
    height: 100vh;
    color: white;
    padding: 5% 10% 5% 10%;

    h1 {
        margin-top: 0px;
        display: flex;
        justify-content: center;
        margin-bottom: 4rem;
    }

    .filter {
        display: flex;
        flex-direction: row;
        margin-bottom: 2rem;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        outline: 0px;
        border: 0px solid transparent;
        font-weight: bolder;
        padding: 1rem 2rem;
    }

    .filter div {
        font-size: 1.2em;
        margin-right: 1rem;
    }

    .filter img {
        width: 20px;
        height: 20px;
    }

    table {
        width: 100%;
        background: rgba(255, 255, 255, 0.05);
        border-collapse: collapse;
    }

`

export { Container }