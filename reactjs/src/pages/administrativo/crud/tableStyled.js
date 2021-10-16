import styled from 'styled-components'

const Container = styled.tr`

    th h1{
        margin: 0px;
        padding: 1.2rem 0px;
    }

    h1 {
        font-size: 1.5em;
    }

    td {
        text-align: center;
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5rem 0px;

        margin-left: 0.1em;
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