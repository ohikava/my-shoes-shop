import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

export default () => {
  const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['products']
  };

  const pReducer = persistReducer(persistConfig, rootReducer);

  const middleware = applyMiddleware(thunk, logger);
  const store = createStore(pReducer, middleware);

  const persistor = persistStore(store);

  return {persistor, store};
}
