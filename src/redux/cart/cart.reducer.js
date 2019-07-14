import { TOGGLE_CART_DROPDOWN } from './cart.action.types';

const INITIAL_STATE = {
  show: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default cartReducer;
