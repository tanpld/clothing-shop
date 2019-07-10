import React from 'react';

import PreviewCollection from '../../components/preview-collection';

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
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
        {collections.map(({ id, ...props }) => (
          <PreviewCollection key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
