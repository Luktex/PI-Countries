import axios from 'axios'


export function getCountries(){
    return async function(dispatch){
        var json = await axios('http://localhost:3001/countries')
    
        return dispatch({
        type: 'GET_COUNTRIES',
        payload: json.data
        })
    }
};

export function filterCountriesByRegion(payload){
    return {
        type: 'FILTER_BY_REGION',
        payload
    }
}

export function filterCreated(payload){
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}