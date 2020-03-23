import {CHANGE_SORT} from './actionsTypes';

export const changeSort = (newSort) => {
  return {
    type: CHANGE_SORT,
    payload: newSort
  };
};
