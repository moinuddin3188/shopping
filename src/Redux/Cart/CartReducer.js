import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './CartType'

const initialState = {
    products: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const similarProduct = state.products.find(product => product.key === action.payload.key)
            const remainingProduct = state.products.filter(product => product.key !== action.payload.key)
            let newProduct = {}
            if (similarProduct) {
                newProduct = {...similarProduct, quantity: action.payload.quantity + similarProduct.quantity}
            } else {
                newProduct = action.payload
            }
            return {
                ...state,
                products: [...remainingProduct, newProduct]
            }
        
        case REMOVE_FROM_CART:
            const newCart = state.products.filter(product => product.key !== action.payload.key)
            return {
                ...state,
                products: newCart
            }
            
        default: return state
    }
}

export default cartReducer