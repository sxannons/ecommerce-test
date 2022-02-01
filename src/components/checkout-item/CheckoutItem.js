import React from 'react';
import { useDispatch } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../store/cart/cartActions';

import { ArrowContainer, CheckoutItemContainer, ImageContainer, NameContainer, PriceContainer, QuantityContainer, RemoveButtonContainer, ValueContainer } from './Checkout.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const handleRemoveItem = () => {
    dispatch(removeItem(cartItem));
  };

  const handleAddItem = () => {
    dispatch(addItem(cartItem));
  };

  const handleClearItem = () => {
    dispatch(clearItemFromCart(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={handleRemoveItem}>&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={handleAddItem}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={handleClearItem}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
