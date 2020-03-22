import {combineReducers} from 'redux';
import productReducer from './productReducer/reducer';

export default combineReducers({
  products: productReducer
});
