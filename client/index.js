import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.jsx';
import './assets/css/main.css';

// const store = createStore();

render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('content'),
);
