import axios from 'axios'
import {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './CategoryType'

const fetchCategoryRequest = () => {
    return {
        type: FETCH_CATEGORY_REQUEST
    }
}

const fetchCategorySuccess = products => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: products
    }
}

const fetchCategoryFailure = error => {
    return {
        type: FETCH_CATEGORY_FAILURE,
        payload: error
    }
}

export const fetchCategory = category => {
    return (dispatch) => {
        dispatch(fetchCategoryRequest())
        axios.get(`http://localhost:5000/productByCategory/${category}`)
        .then(response => {
            const products = response.data
            dispatch(fetchCategorySuccess(products))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchCategoryFailure(errorMessage))
        })
    }
}