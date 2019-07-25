import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
} from './cart.action.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  show: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        show: !state.show,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
