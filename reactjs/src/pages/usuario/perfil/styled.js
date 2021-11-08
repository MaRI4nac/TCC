import styled from "styled-components";

const ITsProfile = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-size: 100%;
    background: rgba(18, 61, 61, 0.8);   
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
    background: linear-gradient(180deg, #184A4A 0%, rgba(25, 69, 69, 0.39) 99.97%, rgba(15, 48, 48, 0) 99.98%, rgba(16, 50, 50, 0.0833333) 99.99%);

    border: 2px solid white;
    padding: 4em 4em;
    position: relative;
    margin-top: 12em;
    margin-bottom: 3em;    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
}

.user-image {
    display: flex;
    align-items: center;
    position: absolute;
    
    top: -13vh;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
}

.user-image img {
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 18vh;
    height: 18vh;
    border-radius: 50%;
}

.profile-user:first-child {
    font-size: 2em;
    color: white;
    font-weight: 500;
}

.profile-user {
    font-size: 2em;
    color: rgba(255, 255, 255, 0.7);
}

.user-general-informations {
    
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
    padding: 3rem 5rem;
    border-radius: 0.3em;

}

.information {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.information:first-child {
    margin-bottom: 2rem;
}

.information > .agp-flexcolumn:first-child {
    font-weight: 500;
    margin-bottom: 5px;
}

.butbutbut {
    display: flex;
    justify-content: center;
}



`

export { ITsProfile }