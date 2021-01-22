import axios from 'axios'
import {
    FETCH_CURRENT_PRODUCT_REQUEST,
    FETCH_CURRENT_PRODUCT_SUCCESS,
    FETCH_CURRENT_PRODUCT_FAILURE
} from './CurrentProductType'


const fetchCurrentProductRequest = () => {
    return {
        type: FETCH_CURRENT_PRODUCT_REQUEST
    }
}

const fetchCurrentProductSuccess = product => {
    return {
        type: FETCH_CURRENT_PRODUCT_SUCCESS,
        payload: product
    }
}

const fetchCurrentProductFailure = error => {
    return {
        type: FETCH_CURRENT_PRODUCT_FAILURE,
        payload: error
    }
}

export const fetchCurrentProduct = key => {
    return (dispatch) => {
        dispatch(fetchCurrentProductRequest)
        axios.get(`http://localhost:5000/productByKey/${key}`)
        .then(response => {
            const currentProduct = response.data
            dispatch(fetchCurrentProductSuccess(currentProduct))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchCurrentProductFailure(errorMessage))
        })
    }
}