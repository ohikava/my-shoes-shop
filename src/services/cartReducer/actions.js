import {ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_FROM_CART} from './actionsTypes.js';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const increaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id
  }
}

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id
  };
};
