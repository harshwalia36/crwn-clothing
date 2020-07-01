import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {withRouter} from 'react-router-dom';
  
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


//history and dispatch are passed by defaults u can check by ...otherProps
const CartDropdown = ({cartItems, history,dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
             { 
                    cartItems.length ?
                   (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />)
                 )):
                (
                   <span className='empty-message'>Your cart is empty</span>
                )}
                
        </div>
        <CustomButton 
        onClick={()=> {
         history.push('/checkout');
         dispatch(toggleCartHidden());    /*dispatch action Shorthand */
        }
        }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



 
export default withRouter(connect(mapStateToProps)(CartDropdown));