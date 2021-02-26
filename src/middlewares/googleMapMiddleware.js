// === import npm
import axios from 'axios';

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
      const {
        map,
        maps,
      } = store.getState().googleMap;


      const request = {
        query: store.getState().parking.searchInput,
        types: ['parking'],
      };

      const callback = (results, status) => {
        console.log(results);
        store.dispatch(toggleField(false));
        store.dispatch(setSearchInput(''));
      };

      const searchResult = new maps.places.PlacesService(map);
      searchResult.textSearch(request, callback);

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default googleMapMiddleware;
