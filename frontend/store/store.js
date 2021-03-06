import { createStore, applyMiddleware } from 'redux';
// import thunk from '../thunk/thunk';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root';

const configureStore = (preloadedState = {}) => {
  return (
  createStore( rootReducer, preloadedState, applyMiddleware(thunk))
)};

export default configureStore;
