import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../store/cart/cartActions';
import { selectCartItemsCount } from '../../store/cart/cartSelectors';

import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from './CartIcon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  const handleOnClick = (e) => {
    dispatch(toggleCartHidden());
  };
  return (
    <CartIconContainer onClick={handleOnClick}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
