import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import googleMapMiddleware from 'src/middlewares/googleMapMiddleware';
import rootReducer from 'src/reducers/';

// merge devTools and the middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    googleMapMiddleware,
    // ...middlewares
  ),
);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancers,
);

export default store;
