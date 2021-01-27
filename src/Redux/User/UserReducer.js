import { SET_USER_INFO } from "./UserType";
import jwt_decode from "jwt-decode";

const token = sessionStorage.getItem('token');
const decode = token && jwt_decode(token);

const initialState = {
    email: token && decode.email || '',
    photo: token && decode.picture || '',
    name: token && decode.name || ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                email: action.payload.email,
                photo: action.payload.photo,
                name: action.payload.name
            }
        
        default: return state
    }
}

export default userReducer;