import {CHANGE_SORT, DEFAULT} from './actionsTypes';

const initialState = {
  sort: DEFAULT
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_SORT:
      return {
        ...state,
        sort: action.payload
      };
    default:
      return state;
  };
};
