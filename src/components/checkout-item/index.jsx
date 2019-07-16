import React from 'react';

import './styles.scss';

const CheckoutItem = ({ cartItem: { name, quantity, price, imageUrl } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">
      {price * quantity} ({price} x {quantity})
    </span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
