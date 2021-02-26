import { combineReducers } from 'redux';

// === import reducers
import parkingReducer from './parkingReducer';

// === merge reducers
const rootReducer = combineReducers({
  parking: parkingReducer,
});
export default rootReducer;
