import {CHANGE_PRICE_LIMIT} from './actionsTypes';

const initialState = {
  priceLimit: [0, 1000]
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_PRICE_LIMIT:
      return {
        ...state,
        priceLimit: action.payload
      };
    default:
      return state;
  };
};
