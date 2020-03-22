import {FETCH_PRODUCTS} from "./actionsTypes";

const initialDate = {
  products: []
};

export default (state=initialDate, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
