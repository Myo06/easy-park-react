import { combineReducers } from 'redux';

// === import reducers
import parkingReducer from './parkingReducer';
import googleMapReducer from './googleMapReducer';

// === merge reducers
const rootReducer = combineReducers({
  parking: parkingReducer,
  googleMap: googleMapReducer,
});
export default rootReducer;
