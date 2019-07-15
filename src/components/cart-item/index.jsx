import React from 'react';

import './styles.scss';

const CartItem = ({ item: { imageUrl, price, name, id, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={`item-${id}`} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
