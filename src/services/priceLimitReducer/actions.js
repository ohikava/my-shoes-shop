import {CHANGE_PRICE_LIMIT} from './actionsTypes';

export const changePriceLimit = (newPriceLimit) => {
  return {
    type: CHANGE_PRICE_LIMIT,
    payload: newPriceLimit
  };
};
