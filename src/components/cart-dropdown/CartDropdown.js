import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelectors';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './CartDropdown.styles';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />) : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>}
      </CartItemsContainer>
      <CustomButton onClick={handleClick}>Got to checkout</CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
