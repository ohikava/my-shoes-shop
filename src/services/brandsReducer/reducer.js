import {CHANGE_BRAND} from './actionsTypes';

const initialState = {
  brands: {
    "Nike": false,
    "Adidas": false,
    "Air Jordan": false,
    "New Balance": false,
    "Sacai": false,
    "Comme des Garçons": false,
    "Converse": false
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_BRAND:
      const copyBrands = {...state.brands};
      copyBrands[action.payload] = !copyBrands[action.payload];
      return {
        ...state,
        brands: copyBrands
      };
    default:
      return state;
  };
};
