import CartActionTypes from './cart.types';

export const toggleCartHidden = () =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

//payload is an optional property so here it is not required

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})