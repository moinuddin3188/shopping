import { SET_USER_INFO } from "./UserType";

const initialState = {
    email: '',
    photo: '',
    name: ''
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