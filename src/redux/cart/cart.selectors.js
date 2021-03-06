import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((total, item) => total + item.quantity, 0),
);

export const selectCartShow = createSelector(
  [selectCart],
  cart => cart.show,
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
);
