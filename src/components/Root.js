import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
