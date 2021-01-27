import { DELIVERY_INFO } from './DeliveryType'


const initialState = {
    info: {}
}

const deliveryInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELIVERY_INFO: {
            return {
                info: {...action.payload}
            }
        }

        default: return state
    }
}

export default deliveryInfoReducer;