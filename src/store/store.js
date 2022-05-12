import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log('dispatching', action);
  console.log('current state', store.getState());
  next(action);
  console.log('next state', store.getState());
};

// import logger from 'redux-logger';


const middleWares = [process.env.NODE_ENV === 'development' && loggerMiddleware].filter(
  Boolean
);

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
