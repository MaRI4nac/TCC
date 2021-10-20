import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {  
    async usuarioLogin(username, senha) {
        let r = await api.get(`/user/login/?email=${username}&senha=${senha}`)
        return r.data;
    }

    async usuarioCreate() {
        return "";
    }
}