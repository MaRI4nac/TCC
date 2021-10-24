import { FaixaTres } from "./styled";

export default function BuyThirdBand () {
    return (
        <FaixaTres>
            <div class="title"> Forma de Pagamento </div>
            <div class="payment-box">
                <div class="payment-like-card">
                    <div class="card-title"> Cartão de Crédito </div>
                    <div class="card-icon"> <img src="/assets/images/credit-card.png" alt="" width="80em" height="95em" /> </div>
                    <input type="radio" name="" id="" class="radio" />
                </div>
                <div class="payment-like-card">
                    <div class="card-title1"> PIX </div>
                    <div class="card-icon1"> <img src="assets/images/icon-pix.png" alt=""width="150em" height="50em" /> </div>
                    <input type="radio" name="" id="" class="radio" />
                </div>
            </div>
            <div class="payment-informations-credit-card">
                <div class="column">
                    <div class="payment-inf-cc-box">
                        <div class="payment-inf-cc-box-title2">Número do Cartão: </div>
                         <input type="text" class="payment-inf-cc-box-text" />
                    </div>
                    <div class="payment-inf-cc-box">
                        <div class="payment-inf-cc-box-title"> Portador do Cartão: </div>
                         <input type="text" class="payment-inf-cc-box-text" />
                    </div>
                    <div class="payment-inf-cc-box">
                        <div class="payment-inf-cc-box-title1"> Nome: </div>
                         <input type="text" class="payment-inf-cc-box-text" />
                    </div>
                </div>
                <div class="column">
                    <div class="payment-inf-cc-box">
                        <div class="payment-inf-cc-box-title3"> CVC: </div>
                         <input type="text" class="payment-inf-cc-box-text" />
                    </div>
                    <div class="payment-inf-cc-box">
                        <div class="payment-inf-cc-box-title"> Vencimento: </div>
                         <input type="text" class="payment-inf-cc-box-text" />
                    </div>
                    <div class="payment-inf-cc-box">
                        <div class="payment-inf-cc-box-title4"> CPF: </div>
                         <input type="text" class="payment-inf-cc-box-text" />
                    </div>
                </div>
            </div>
        </FaixaTres>
    )
}