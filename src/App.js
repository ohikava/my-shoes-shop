import React from 'react';
import {CircularProgress} from "@material-ui/core"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/index.js';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './services/index.js';

const {store, persistor} = configureStore();

const App = () => {
  return (<>
      <Provider store={store}>
        <PersistGate loading={<CircularProgress color="secondary" />} persistor={persistor} >
        <Router>
          <Switch>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </Router>
        </PersistGate>
      </Provider>
    </>);
}
export default App;
