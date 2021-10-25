import styled from "styled-components";


const EventTypeStyle = styled.div`

    display: flex;
    flex-direction: column;
    background-color: rgba(18, 61, 61);
    min-height: 100vh;
    width: 100%;


.ct-color {
    background-color: rgba(18, 61, 61);
    color: white;
    font-size: 1.1em;
}

.first-band {
    background-image: url("/assets/images/eventTypeWallpaper.jpg");
    background-opacity: 10%;
    height: 50vh;
    position: relative;
    display: flex;
    display: column;
}

.principal-image-title {
    position: absolute;
    top: 23vh;
    left: 20vw;
    display: flex;
    flex-direction: row;

}

.princ-texts {
    margin-left: 0.8em;
    margin-top: 5em;
}

.p-title {
    margin-bottom: 1em;
    font-size: 2em;
    width: 500px;

    text-align: center;
    font-weight: 800;
}


.second-band {
    margin-top: 20vh;
    
    padding: 3em 3em;
}

.informations-about {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
}

.line-information {
    display: flex;
    flex-direction: row;
}

.icon-information {

}

.desc-information {
    margin-left: 1em;
}



.third-band {
    padding: 1em 1em;
    display: flex;
    justify-content: center;
}

    @media (max-width:2560px) {

        .principal-image-title {
            position: absolute;
            top: 37vh;
            left: 25vw;
            display: flex;
            flex-direction: row;
        }
 
    }

    @media (max-width:3840px) {

        .principal-image-title {
            position: absolute;
            top: 41vh;
            left: 25vw;
            display: flex;
            flex-direction: row;
        }
 
    }

    @media (max-width:1920px) {

        .principal-image-title {
            position: absolute;
            top: 32vh;
            left: 25vw;
            display: flex;
            flex-direction: row;
        }
 
    }

    @media (max-width:1280px) {

        .principal-image-title {
            position: absolute;
            top: 28vh;
            left: 25vw;
            display: flex;
            flex-direction: row;
        }
 
    }

`

export { EventTypeStyle }