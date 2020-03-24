import {CHANGE_COLORS} from './actionsTypes';

export const changeColor = (newColor) => {
  return {
    type: CHANGE_COLORS,
    payload: newColor
  };
};
