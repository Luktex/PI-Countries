
const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: []


}

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
        return{
            ...state,
            countries: action.payload,
            allCountries: action.payload,
           
        }

        case 'GET_NAME_COUNTRIES':
        return {
            ...state,
            countries: action.payload
        }
        case 'GET_ACTIVITIES':
            const allActivities = state.allCountries
            console.log('statecountries',state.allCountries)
            console.log('holaaaa',allActivities)
            const ActFilter = action.payload === 'All'?allActivities:allActivities.map(el => el.activities.includes('CANTAR'))
                   console.log('lolis',ActFilter) 
            return {
                        ...state,
                        activities: ActFilter
                    }

        case 'FILTER_BY_REGION':
            const allCountries = state.allCountries
            const regionFiltered = action.payload === 'All'?allCountries:allCountries.filter(el => el.region === action.payload )
            return{
                ...state,
                countries: regionFiltered

            }
            case "POST_ACTIVITY":
                return {
                    ...state,
                }
            case "FILTER_CREATED":
                const statusFiltered2 = action.payload === 'created' ? state.allCountries.filter(el => el.createdInDb) : state.allCountries.filter(el => !el.createdInDb)
                return {
                    ...state,
                    countries: action.payload === 'All' ? state.allCountries : statusFiltered2
                }
               
                case 'ORDER_BY_POPU':
                    let sortedArra = action.payload === 'popu' ?
                        state.countries.sort(function (a, b) {
                            if (a.population > b.population) {
                                return 1;
                            }
                            if (b.population > a.population) {
                                return -1;
                            }
                            return 0;
                        }) :
                        state.countries.sort(function (a, b) {
                            if (a.population > b.population) {
                                return -1;
                            }
                            if (b.population > a.popolation) {
                                return 1;
                            }
                            return 0;
                        })
                    return {
                        ...state,
                        countries: sortedArra
                    }
                    case "GET_DETAILS":
                        return {
                            ...state,
                            detail: action.payload
                        }
                    case 'ORDER_BY_NAME':
                    let sortedArr = action.payload === 'asc' ?
                        state.countries.sort(function (a, b) {
                            if (a.name > b.name) {
                                return 1;
                            }
                            if (b.name > a.name) {
                                return -1;
                            }
                            return 0;
                        }) :
                        state.countries.sort(function (a, b) {
                            if (a.name > b.name) {
                                return -1;
                            }
                            if (b.name > a.name) {
                                return 1;
                            }
                            return 0;
                        })
                    return {
                        ...state,
                        countries: sortedArr
                    }
            default: 
        return state;
    }

}

export default rootReducer;