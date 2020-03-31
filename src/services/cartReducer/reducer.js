import {ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_FROM_CART} from './actionsTypes';

const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      if (state.cart.some(p => p.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map(p => {
            if (p.id === action.payload.id) {
              p.quantity += 1;
            }
            return p;
          })
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(p => p.id !== action.payload)
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(p => {
          if(p.id === action.payload) {
            p.quantity += 1;
          }
          return p;
        })
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(p => {
          if(p.id === action.payload) {
            p.quantity -= 1;
          }
          return p;
        })
      };
    default:
      return state;
  };
};
