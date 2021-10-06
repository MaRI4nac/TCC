import styled from 'styled-components'

const Container = styled.div`

    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 10vh;

    position: fixed;
    top: 0em;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    
    .perfil-image {
        padding: 10px 0px;
    }

    img {
        height: 8vh;
        width: auto;
    }

    input {
        outline: none;
        background-color: rgba(240, 248, 255, 0.3);
        border: 1px solid transparent;
        height: 40%;
        width: 45%;
        border-radius: 0.5em;
        padding-left: 1rem;

        color: white;
        font-size: 1.2em;

        ::-webkit-input-placeholder { /* Edge */
            color: rgba(255, 255, 255, 0.5);
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: rgba(255, 255, 255, 0.5);
        }

        ::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
    }

`



export { Container }