import React from 'react';
import {CircularProgress} from "@material-ui/core"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Register from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import Header from './pages/Header';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './services/index.js';

const {store, persistor} = configureStore();

const App = () => {
  return (<>
      <Provider store={store}>
        <PersistGate loading={<CircularProgress color="secondary" />} persistor={persistor} >
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/products/:id">
              <ProductPage />
            </Route>
          </Switch>
        </Router>
        </PersistGate>
      </Provider>
    </>);
}
export default App;
