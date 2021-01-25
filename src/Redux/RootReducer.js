import { combineReducers } from 'redux'
import cartReducer from './Cart/CartReducer';
import categoryReducer from './Category/CategoryReducer';
import currentProductReducer from './CurrentProduct/CurrentProductReducer'
import searchReducer from './Search/SearchReducer';

const rootReducer = combineReducers({
    currentProduct: currentProductReducer,
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer
})


export default rootReducer;