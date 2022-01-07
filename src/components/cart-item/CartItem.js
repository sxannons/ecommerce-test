import React from 'react';

import { CartItemContainer, ItemDetailsContainer, ItemDetailsNameContainer, ItemDetailsPriceContainer } from './CartItem.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <ItemDetailsNameContainer>{name}</ItemDetailsNameContainer>
        <ItemDetailsPriceContainer>
          {quantity} x ${price}
        </ItemDetailsPriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
