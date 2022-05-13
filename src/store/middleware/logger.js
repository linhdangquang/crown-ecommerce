export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log('dispatching', action);
  console.log('current state', store.getState());
  next(action);
  console.log('next state', store.getState());
};