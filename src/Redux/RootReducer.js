import { combineReducers } from 'redux'
import currentProductReducer from './CurrentProduct/CurrentProductReducer'

const rootReducer = combineReducers({
    currentProduct: currentProductReducer
})


export default rootReducer;