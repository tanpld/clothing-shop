import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckouItem from '../../components/checkout-item';
import StripeCheckoutButton from '../../components/stripe-checkout-button';

import './styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems &&
      cartItems.map(cartItem => (
        <CheckouItem key={cartItem.id} cartItem={cartItem} />
      ))}
    <div className="total">
      <span>TOTAL: ${cartTotal}</span>
    </div>
    <div className="test-warning">
      *Please use the following TEST CREDIT CARD for testing payments*
      <br />
      Card: 4242 4242 4242 4242 - Exp: 01/20 - CVC: 123
    </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
