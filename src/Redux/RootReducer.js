import { combineReducers } from 'redux'
import cartReducer from './Cart/CartReducer';
import currentProductReducer from './CurrentProduct/CurrentProductReducer'

const rootReducer = combineReducers({
    currentProduct: currentProductReducer,
    cart: cartReducer
})


export default rootReducer;