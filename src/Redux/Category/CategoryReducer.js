import {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './CategoryType'


const initialState = {
    loading: false,
    products: [],
    error: ''
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_CATEGORY_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }

        case FETCH_CATEGORY_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }

        default: return state
    }
}

export default categoryReducer;