import { combineReducers } from 'redux'
import cartReducer from './Cart/CartReducer';
import categoryReducer from './Category/CategoryReducer';
import currentProductReducer from './CurrentProduct/CurrentProductReducer'
import deliveryInfoReducer from './Delivery/DeliveryReducer';
import searchReducer from './Search/SearchReducer';
import userReducer from './User/UserReducer';

const rootReducer = combineReducers({
    currentProduct: currentProductReducer,
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer,
    user: userReducer,
    deliveryInfo: deliveryInfoReducer
})


export default rootReducer;