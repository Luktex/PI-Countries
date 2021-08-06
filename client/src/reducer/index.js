
const initialState = {
    countries: [],
    allCountries: []

}

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
        return{
            ...state,
            countries: action.payload,
            allCountries: action.payload
        }

        case 'GET_NAME_COUNTRIES':
        return {
            ...state,
            countries: action.payload
        }


        case 'FILTER_BY_REGION':
            const allCountries = state.allCountries
            const regionFiltered = action.payload === 'All'?allCountries:allCountries.filter(el => el.region === action.payload )
            return{
                ...state,
                countries: regionFiltered

            }
            case "FILTER_CREATED":
                const statusFiltered2 = action.payload === 'created' ? state.allCountries.filter(el => el.createdInDb) : state.allCountries.filter(el => !el.createdInDb)
                return {
                    ...state,
                    countries: action.payload === 'All' ? state.allCountries : statusFiltered2
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