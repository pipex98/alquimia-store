import { types } from '../types/types';


export const addProductCart = (product) => ({
    type: types.cartAddProduct,
    payload: product
})

export const cartLogout = () => ({
    type: types.cartLogoutCleaning
})