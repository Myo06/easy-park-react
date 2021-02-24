import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import parking from 'src/reducers/parkingReducer';

const store = createStore(
  // reducer
  parking,
  // enhancer
  devToolsEnhancer(),
);

export default store;
