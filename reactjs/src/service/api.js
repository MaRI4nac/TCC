import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {  
    async userLogin(mail, senha) {
        let r = await api.get(`/user/login/?mail=${mail}&senha=${senha}`)
        return r.data;
    }

    async userCreate(nmUsu, cpf, email, username, senha, nascimento) {
        let r = await api.post(`/user/create`, {nmUsu, cpf, email, username, senha, nascimento})
        return r.data;
    }

    async userForgotPassword(email) {
        let r = await api.post(`/user/forgotpassword`, {email})
        return r.data
    }

    async userChangePassword(codigo, email, senha) {
        let r = await api.put(`/user/changepassword`, {codigo, email, senha})
        return r.data;
    }

    async crudGetEvents(nome, categoria) {
        let r = await api.get(`/crud/events/?nome=${nome}&&categoria=${categoria}`)
        return r.data;
    }

    async crudCreateEvents(nmEvento, categoria, duracao, classificacao, valorIngresso, local, dtMin, dtMax, elenco, descEvento, imgCapa, imgFundo, imgSec) {
        let r = await api.post(`/crud/events`, )
    }

    async crudUpdateEvents() {

    }

    async crudDeleteEvents() {

    }

    async directedSearch(id) {
        let r = await api.get(`/buscaDirecionada?id=${id}`)
        return r.data;
    }

    async OrderManagement(order) { 
        let m = await api.get(`/user/management?orderacao=${order}`)
        return r.data; 
    }

    async getConfirmTicket() { 
        let m = await api.get(`/confirmTicket`)
        return r.data; 
    }

    async putConfirmTicket(id) { 
        let m = await api.put(`/confirmTicket/${id}`)
    }

    async TicketPerson(id) { 
        let m = await api.get(`/TicketPerson?id=${id}`)
    }

    async directSearch (search) {
        let r = await api.get(`/buscadireta?search=${search}`)
        return r.data;
    }
}