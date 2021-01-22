import {
    FETCH_CURRENT_PRODUCT_REQUEST,
    FETCH_CURRENT_PRODUCT_SUCCESS,
    FETCH_CURRENT_PRODUCT_FAILURE
} from './CurrentProductType'

const initialState = {
    loading: false,
    currentProduct: [],
    error: ""
}

const currentProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_CURRENT_PRODUCT_SUCCESS:
            return {
                loading: false,
                currentProduct: action.payload,
                error: ""
            }
        
        case FETCH_CURRENT_PRODUCT_FAILURE:
            return {
                loading: false,
                currentProduct: [],
                error: ""
            }

        default: return state
    }
}


export default currentProductReducer;