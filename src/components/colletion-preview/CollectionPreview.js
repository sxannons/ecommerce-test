import React from 'react';
import { useNavigate } from 'react-router-dom';

import CollectionItem from '../collection-item/CollectionItem';

import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './CollectionPreview.styles';

const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(`./${routeName}`)}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
