import React from 'react';

import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';
import GlobalStyle from '~/styles/global';

import Routes from './Router';
import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
