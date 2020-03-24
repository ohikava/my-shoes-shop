import {CHANGE_BRAND} from './actionsTypes';

export const changeBrand = (brand) => {
  return {
    type: CHANGE_BRAND,
    payload: brand
  };
};
