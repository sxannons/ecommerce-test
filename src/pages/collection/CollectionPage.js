import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectShopCollection } from '../../store/shop/shopSelectors';

import CollectionItem from '../../components/collection-item/CollectionItem';

import { CollectionItems, CollectionPageContainer, CollectionTitle } from './CollectionPage.styles';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const { title, items } = useSelector(selectShopCollection(collectionId));

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
      {collectionId}
    </CollectionPageContainer>
  );
};

export default CollectionPage;
