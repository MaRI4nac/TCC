import styled from 'styled-components'

const Container = styled.tr`

    th h1{
        margin: 0px;
        padding: 1.5rem 0px;
    }

    td {
        text-align: center;
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5rem 0px;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .flex-row > * {
        margin-right: 1rem;
    }
`

export { Container }