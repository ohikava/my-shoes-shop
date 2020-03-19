import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/index.js';

const App = () => {
  return (<>
      <Router>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </>);
}
export default App;
