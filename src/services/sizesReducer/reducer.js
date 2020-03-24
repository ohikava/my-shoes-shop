import {CHANGE_SIZES} from './actionsTypes';

const initialState = {
  sizes: {
    "4M": false,
    "4.5M": false,
    "5M": false,
    "5.5M": false,
    "6M": false,
    "6.5M": false,
    "7M": false,
    "7.5M": false,
    "8M": false,
    "8.5M": false,
    "9M": false,
    "9.5M": false,
    "10M": false,
    "10.5M": false,
    "11M": false,
    "11.5M": false,
    "12M": false,
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_SIZES:
      const copySizes = {...state.sizes};
      copySizes[action.payload] = !copySizes[action.payload];
      return {
        ...state,
        sizes: copySizes
      };
    default:
      return state;
  };
};
