import axios from "axios";

const api = axios.create ({
    baseURL: 'https://tccinsf-newside.herokuapp.com/general'
})

export default class Api {
    
    async getConfirmTicket() { 
        let m = await api.get(`/confirmTicket`)
        return m.data; 
    }

    async putConfirmTicket(id) { 
        let m = await api.put(`/confirmTicket/${id}`)
        return m.data;
    }

}