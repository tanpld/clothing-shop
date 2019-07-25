import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
} from './cart.action.types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});
