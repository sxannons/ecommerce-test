import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Got to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
