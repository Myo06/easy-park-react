// === actions
import {
  FETCH_PARKINGS,
} from 'src/actions/googleMap';

import {
  toggleField,
  setSearchInput,
} from 'src/actions/parking';

const googleMapMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PARKINGS: {
      store.dispatch(toggleField(false));
      store.dispatch(setSearchInput(''));
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default googleMapMiddleware;
