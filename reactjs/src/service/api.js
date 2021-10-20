import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {  
    async usuarioLogin(username, senha) {
        let r = await api.get(`/user/login/?username=${username}&senha=${senha}`)
        return r.data;
    }

    async usuarioCreate(nmUsu, cpf, email, username, senha, nascimento) {
        let r = await api.post(`/user/create`, {nmUsu, cpf, email, username, senha, nascimento})
        return r.data;
    }
}