// Cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';

// Products
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';

// User
export const LOGIN_USER = 'LOGIN_USER';
// User details and cart details will be empty
// from state store on LOGOUT.
export const LOGOUT_USER = 'LOGOUT_USER';
// If user is updated at server end, reload it
// at client end (e.g. in case of update user).
export const RELOAD_USER = 'RELOAD_USER';
