import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStrike= price*100;   //price converted to sents
    const publisahableKey='pk_test_51H2idaGpq7KVCoBGX0Ia7vQqtHQdUnmYx0551q6YI3EZmuuHEBaQtkS4LjIlIYprvNVlOtIlTaGCINHhIler1PpL00PNyaxyKg';

 const onToken = token =>{
     console.log(token);
     alert('Payment Successful');
 }

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStrike}
        panelLabel='pay Now'
        token={onToken}
        stripeKey={publisahableKey}
        />
    )
}

export default StripeCheckoutButton;