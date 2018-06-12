import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createDebounce from 'redux-debounced';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const debouncer = createDebounce();
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
      applyMiddleware(debouncer, thunkMiddleware, loggerMiddleware)
  );
}
