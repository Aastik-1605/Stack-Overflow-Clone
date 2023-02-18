import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Reducers from './reducers'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'


const store = createStore( Reducers, compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
