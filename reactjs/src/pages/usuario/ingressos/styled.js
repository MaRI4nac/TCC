import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(26, 73, 73, 0.83) 0%, rgba(47, 79, 79, 0.83) 0.01%, rgba(33, 108, 108, 0.57) 53.84%, rgba(47, 79, 79, 0.89) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    header {
        width: 100%;
    }

    .boxes {    
        padding-top: 15vh;

    }
`

export { Container }