import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducerInitialState = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};

const feedbackReducer = (state = feedbackReducerInitialState, action) => {
  if (action.type === 'UPDATE_FEELING') {
    return { ...state, ...action.payload };
  } else if (action.type === 'UPDATE_UNDERSTANDING') {
    return { ...state, ...action.payload };
  } else if (action.type === 'UPDATE_SUPPORT') {
    return { ...state, ...action.payload };
  } else if (action.type === 'UPDATE_COMMENTS') {
    return { ...state, ...action.payload };
  }
  if (action.type === 'START_PAGE') {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
