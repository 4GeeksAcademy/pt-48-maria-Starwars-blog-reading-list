const API_URL = 'https://www.swapi.tech/api/planets'

const PLANETS_API = {
    get: async() => {
        const response = await fetch(API_URL, {method: 'GET'});
        const {results} = await response.json()
        return results;
    },
    getById: async(id) => {
        const response = await fetch(`${API_URL}/${id}`, {method: 'GET'});
        const {result} = await response.json()
        return result;
    },
}

export default PLANETS_API;