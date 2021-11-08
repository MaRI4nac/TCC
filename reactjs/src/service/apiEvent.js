import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3030/events'
})

export default class Api {
    async crudGetEvents(nome, categoria) {
        let r = await api.get(`/crud?nome=${nome}&&categoria=${categoria}`)
        return r.data;
    }
    
    async crudCreateEvents(nmEvento, categoria, duracao, classificacao, valorIngresso, local, dtMin, dtMax, elenco, descEvento, imgCapa, imgFundo, imgSec) {
        let r = await api.post(`/crud`, )
    }
    
    async crudUpdateEvents() {
    
    }
    
    async crudDeleteEvents() {
    
    }

    async directedSearch(id) {
        let r = await api.get(`/buscaDirecionada?id=${id}`)
        return r.data;
        
    }

    async directSearch (search) {
        let r = await api.get(`/buscadireta?search=${search}`)
        return r.data;
    }

    async highlightedEvents () {
        let r = await api.get('/highlighted')
        return r.data;
    }
}

