import styled from 'styled-components'

const Relator = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    max-height: 100%;
    color: white;

    padding: 2em 2em;

    background-color: #2F4F4F;
    width: 100% 100%;
    min-height: 100vh;

.title {
    text-align: center;
    
    font-size: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
    font-weight: 900;
}

.graphics-rel {
    display: flex;
    flex-direction: column;

}

.column {
    display: flex;
    flex-direction: row;
}

.the-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid white;
    margin: 2em;

    padding: 2em 5em;

}

.the-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5em;

    font-weight: 700;
}

.the-subtitle {
    margin-bottom: 2em;
    font-size: 1em;
}

.the-graphic {
    margin-bottom: 1.5em;
}




`

export { Relator }