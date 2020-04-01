import React from 'react';
import {CircularProgress} from "@material-ui/core"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Register from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import Header from './pages/Header';
import CartPage from './pages/CartPage';
import ErrorBoundary from './pages/ErrorBoundary';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './services/index.js';

const {store, persistor} = configureStore();

const App = () => {
  return (<>
      <Provider store={store}>
        <PersistGate loading={<CircularProgress color="secondary" />} persistor={persistor} >
        <ErrorBoundary>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/shoes/:id">
                <ProductPage />
              </Route>
              <Route path="/cart">
                <CartPage />
              </Route>
            </Switch>
          </Router>
        </ErrorBoundary>
        </PersistGate>
      </Provider>
    </>);
}
export default App;
