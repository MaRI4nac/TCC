import axios from 'axios'

const api = axios.create ({
    baseURL: 'http://localhost:3030/buy'
})

export default class Api {

    async finishBuy(cardNumber, cardOwner, cvc, validity, cpf, userId, paymentMethod, dates) {
        let r = await api.post('/event', {
            
            creditCard: {
                cardNumber,
                cardOwner,
                cvc,
                validity,
                cpf
            },
        
            selling: {
                userId,
                paymentMethod
            },

            SellingItems: dates
            
        })
        return r.data
    }
}