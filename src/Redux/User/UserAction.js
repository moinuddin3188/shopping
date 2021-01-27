import { SET_USER_INFO } from "./UserType";


export const setUserInfo = (email, photoUrl, name) => {
    return {
        type: SET_USER_INFO,
        payload: {
            email: email,
            photo: photoUrl,
            name: name
        }
    }
}