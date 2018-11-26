/* eslint-env browser */
import './styles/app.css';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';

import {createAppStore} from './js/state/stores/createAppStore';

const store = createAppStore();

ReactDOM.render((
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
), document.getElementById('app'));
