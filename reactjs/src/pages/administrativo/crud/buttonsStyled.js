import styled from 'styled-components'

const Container = styled.div`
    background-color: #F0F8FF;
    display: flex;
    flex-direction: row;
    color: black;

    border-radius: 25px;
    align-items: center;
    justify-content: center;

    padding: 5px 1rem;

    img {
        width: 30px;
        height: 30px;
    }
    
    div {
        font-size: 1em;
        margin-right: 0.8rem;
    }

    .leftBox {
        margin-right: 0.8em;
    }
`

export { Container }