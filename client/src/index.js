import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
)