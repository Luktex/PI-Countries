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

export function orderByPopu(payload){
    return {
        type: 'ORDER_BY_POPU',
        payload
    }
}



export function getActivities() {
    return async function (dispatch) {
        var info = await axios("http://localhost:3001/activities")

        return dispatch({type: "GET_ACTIVITIES", payload: info.data})
    }
    
}

export function getDetail(alpha3Code){
    return async function (dispatch){
        try{
            var json = await axios.get("http://localhost:3001/countries/" + alpha3Code)
            console.log(json)
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}


export function postActivity(payload) {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/activity", payload);
        console.log(response)
        return response

    }
}


export function getNameCountries(name){
    return async function(dispatch){
        try {
            var json = await axios("http://localhost:3001/countries?name=" + name)
            return dispatch ({
                type: "GET_NAME_COUNTRIES", payload: json.data })
        } catch(error) {
            console.log(error)
        }
    }
}

