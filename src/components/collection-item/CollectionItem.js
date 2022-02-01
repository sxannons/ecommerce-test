import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../store/cart/cartActions';

import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer, PriceContainer } from './CollectionItem.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price } = item;

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl}></BackgroundImage>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={handleAddItem} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
