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
  if (action.type === 'UPDATE_FEEDBACK') {
    return { ...state, ...action.payload };
  }
  if (action.type === 'START_PAGE') {
    return feedbackReducerInitialState;
  }
  return state;
};

const getDataReducer = (state = [], action) => {
  if (action.type === 'GET_DATA') {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
    getDataReducer,
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
