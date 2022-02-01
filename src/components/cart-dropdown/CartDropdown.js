import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelectors';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './CartDropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
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

export default CartDropdown;
