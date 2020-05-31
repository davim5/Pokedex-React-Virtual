import React from 'react';

import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';
import GlobalStyle from '~/styles/global';

import Routes from './routes/index';
import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
