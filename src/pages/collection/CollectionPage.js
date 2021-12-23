import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectShopCollection } from '../../store/shop/shopSelectors';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPage.styles.scss';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const { title, items } = useSelector(selectShopCollection(collectionId));

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      {collectionId}
    </div>
  );
};

export default CollectionPage;
