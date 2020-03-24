import {CHANGE_COLORS} from './actionsTypes';

const initialState = {
  colors: {
    "black": false,
    "green": false,
    "orange": false,
    "red": false,
    "white": false,
    "purple": false,
    "grey": false,
    "blue": false,
    "yellow": false,
    "turquoise": false
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_COLORS:
        const colorsCopy = {...state.colors};
        colorsCopy[action.payload] = !colorsCopy[action.payload];
        return {
          ...state,
          colors: colorsCopy
        };
    default:
      return state;
  }
}
