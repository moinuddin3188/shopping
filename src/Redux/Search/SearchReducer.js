import {
    FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE
} from './SearchType'


const initialState = {
    loading: false,
    products: [],
    error: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_SEARCH_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }

        case FETCH_SEARCH_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }

        default: return state
    }
}


export default searchReducer;