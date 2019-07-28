import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

import PreviewCollection from '../../components/preview-collection';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...props }) => (
      <PreviewCollection key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
