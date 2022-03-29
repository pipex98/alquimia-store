import { types } from "../types/types";

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
}

export const cartReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.cartAddProduct:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ],
                quantity: state.quantity + 1,
                total: state.total += action.payload.price * action.payload.quantity
            }

        case types.cartLogoutCleaning:
            return {
                ...initialState
            }

        case types.cartDelete:
            return {
                ...state,
                products: state.products.filter( product => product._id !== action.payload )
            }

        default:
            return state;
    }

} 