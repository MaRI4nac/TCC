import styled from "styled-components";

const ITsProfile = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-size: 100%;
    background-image: url("/assets/images/wallpaper-profile..png");
    background-position: 10%;
    background-repeat: no-repeat;
    color: white;

    align-items: center;
    justify-content: center;


.header{
    background-color:aliceblue;
    height: 8vh;
}

.the-band {
    display: flex;
    flex-direction: row;

    border: 2px solid white;
    padding: 4em 4em;
}

.user-image {
    margin-right: 5em;
    display: flex;
    align-items: center;
}

.user-general-informations {
    margin-left: 3em;
}

.first-box {
    margin-bottom: 2em;
    text-align: center;
}

.profile-name {
    font-size: 2.5rem;
    font-weight: bolder;
}

.profile-user {
    font-size: 1.3rem;
}

.second-box {
    margin-bottom: 2em;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 2em 2.5em;
    border-radius: 0.3em;
}

.information {
    font-size: 1.2rem;
}

.butbutbut {
    display: flex;
    justify-content: center;
}

`

export { ITsProfile }