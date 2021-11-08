import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3030/user'
})


export default class Api {

    async userLogin(mail, senha) {
        let r = await api.get(`/login/?mail=${mail}&&senha=${senha}`)
        return r.data;
    }

    async userCreate(nmUsu, cpf, email, username, senha, nascimento, imagem) {
        let r = await api.post(`/create`, {nmUsu, cpf, email, username, senha, nascimento, imagem })
        return r.data;
    }

    async userUpdate(nmUsu, cpf, email, username, senha, nascimento, imagem, id) {
        let r = await api.put(`/update/${id}`, {nmUsu, cpf, email, username, senha, nascimento, imagem })
        return r.data;
    }

    async userForgotPassword(email) {
        let r = await api.post(`/forgotpassword`, {email})
        return r.data
    }

    async userChangePassword(codigo, email, senha) {
        let r = await api.put(`/changepassword`, {codigo, email, senha})
        return r.data;
    }

    async TicketPerson(id) { 
        let m = await api.get(`/TicketPerson?id=${id}`)
        return m.data;
    }

    async OrderManagement(order) { 
        let m = await api.get(`/user/management?orderacao=${order}`)
        return m.data; 
    }

    async getUserTickets(id) {
        let r = await api.get(`/userTickets/?id=${id}`)
        return r.data;
    }


}
