import React, { Component } from 'react';

import CollectionPreview from '../../components/colletion-preview/CollectionPreview';

import SHOP_DATA from './shop.data';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        SHOP PAGE
        {collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
    );
  }
}
