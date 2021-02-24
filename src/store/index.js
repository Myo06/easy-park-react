import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import parkingReducer from 'src/reducers/parkingReducer';

const store = createStore(
  // reducer
  parkingReducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
