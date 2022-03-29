import { types } from '../types/types'


const initialState = {
    currentUser: null,
    isFetching: false,
    error: ''
}

export const authReducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        
        case types.authLogin:
            return {
                currentUser: action.payload,
                isFetching: false,
            }

        case types.authChecking:
            return {
                isFetching: true
            }

        case types.authCheckingFinish:
            return {
                isFetching: false
            }

        case types.authLogout:
            return {
                ...initialState
            }

        case types.authError:
            return {
                error: action.payload
            }

        default:
            return state;
    }

}