import {createSelector} from 'reselect';

const selectCart = state =>state.cart;  //input selector 

//output Selector (arg1,arrg2)  
//arg1=array of input selectors
//arg2= func(each output of input selectors as the array as (param)). that will return the array of selector 

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItems = createSelector(        /* this is a memorized selector */
    [selectCart], 
     (cart) => cart.cartItems
     );


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumalatedQuantity ,cartItem) =>
     accumalatedQuantity + cartItem.quantity,0)
);     

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumalatedQuantity ,cartItem) =>
     accumalatedQuantity + cartItem.quantity*cartItem.price,0)
)