import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HvG5SD5vvR5Nn8uycp1Hxylqg9HOBxMoRz8L6JzMdMpX3NMNpHcfVsTRtNHMxvlsHCEPiK7KJWluLsVgaL7AGN800diPFHZvI';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Ecommencer Test Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
