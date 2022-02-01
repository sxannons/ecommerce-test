import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../store/shop/shopSelectors';

import CollectionPreview from '../colletion-preview/CollectionPreview';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
