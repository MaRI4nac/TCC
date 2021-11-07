import styled from "styled-components";

const FaixaTres = styled.div `


    display: flex;
    flex-direction: column;

    padding: 2em;


.title {
    text-align: center;
    text-transform: uppercase;
    font-size: 2em;
    
    margin-bottom: 2em;
}    

.payment-box {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1em;
    padding: 1em 0em;
}

.payment-like-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1em 1em;
    background-color: #F0F8FF;
    color: #000;
    border-radius: 1em;

}

.card-title, .card-title1 {
    font-size: 1.1em;
    font-weight: 800;

    margin-bottom: 1em;
}

.card-icon, .card-icon1 {
    margin-bottom: 1em;
}

.card-icon1 {
    margin-bottom: 2em;
}

.card-title1 {
    margin-bottom: 2em;
}

.radio {
    width: 2em;
}

.payment-informations-credit-card {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1em;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    margin-top: 2em;

}

.column {
    display: flex;
    flex-direction: column;
}

.payment-inf-cc-box {
    display: flex;
    flex-direction: row;
}

.payment-inf-cc-box-title, .payment-inf-cc-box-title1, .payment-inf-cc-box-title2, .payment-inf-cc-box-title3, .payment-inf-cc-box-title4 {
    display: flex;
    align-items: center;
    margin-right: 1em;
    font-size: 1.1em;
}

.payment-inf-cc-box-title1 {
    margin-left: 6.6em;
}

.payment-inf-cc-box-title2 {
    margin-left: 0.3em;
}

.payment-inf-cc-box-title3, .payment-inf-cc-box-title4 {
    margin-left: 3.3em;
}

.payment-inf-cc-box-title4 {
    margin-left: 3.5em;
}

.payment-inf-cc-box-text {
    border-radius: 0.5em;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
}


input {
    border: none;
    width: 18em;
    height: 2.5em;
    border-radius: 0.5em;
    outline: none;
}



`


export { FaixaTres }