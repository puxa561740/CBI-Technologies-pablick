import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './ReduxStore/combineReduser'

ReactDOM.render(
  <Provider store={state}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

