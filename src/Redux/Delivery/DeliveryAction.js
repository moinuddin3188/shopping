import { DELIVERY_INFO } from './DeliveryType'


export const deliveryInfo = info => {
    return {
        type: DELIVERY_INFO,
        payload: info
    }
}