import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './util/session_api_util';


window.store = configureStore();
window.login = login ;


document.addEventListener('DOMContentLoaded', () => {
  const myStore = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={myStore}/>, root);
});
