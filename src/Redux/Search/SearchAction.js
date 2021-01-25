import axios from 'axios'
import {
    FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE
} from './SearchType'


const fetchSearchRequest = () => {
    return {
        type: FETCH_SEARCH_REQUEST
    }
}

const fetchSearchSuccess = products => {
    return {
        type: FETCH_SEARCH_SUCCESS,
        payload: products
    }
}

const fetchSearchFailure = error => {
    return {
        type: FETCH_SEARCH_FAILURE,
        payload: error
    }
}

export const fetchSearchResult = keyWord => {
    return (dispatch) => {
        dispatch(fetchSearchRequest())
        axios.get(`http://localhost:5000/search/${keyWord}`)
        .then(response => {
            const products = response.data
            dispatch(fetchSearchSuccess(products))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchSearchFailure(errorMessage))
        })
    }
}