import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from './cart.action.types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
