import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/index'
import authReducer from './store/reducers/Auth';

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux dev tools

// Creates the store which takes in the argument reducer and enhancer
// The reducer gives us the next state 
// The enhancer uses applyMiddleware which extends the store with custom functionality.
// The redux stor honors the singleresponsibilityprinc, since the store stores the data and the reducer handles changes
const store = createStore(rootReducer, composeEnhance(applyMiddleware(thunk)))

// The provider makes the redux store available to the App component
// The App's entry point
const app = (
  <Provider store = {store}>
    <App />
  </Provider>
)

// Entry point for application 
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
