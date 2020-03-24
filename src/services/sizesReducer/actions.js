import {CHANGE_SIZES} from './actionsTypes';

export const changeSizes = (size) => {
  return {
    type: CHANGE_SIZES,
    payload: size
  };
};
