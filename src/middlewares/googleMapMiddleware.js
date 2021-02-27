// === actions
import {
  FETCH_PARKINGS,
} from 'src/actions/googleMap';

import {
  toggleField,
  setSearchInput,
  setSearchFieldError,
} from 'src/actions/parking';
import { saveLocations } from '../actions/parking';

// === const
// @https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesServiceStatus
const OK = 'OK';
const ZERO_RESULTS = 'ZERO_RESULTS';
const OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT';
const REQUEST_DENIED = 'REQUEST_DENIED';
const INVALID_REQUEST = 'INVALID_REQUEST';
const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

const googleMapMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PARKINGS: {
      const {
        map,
        maps,
      } = store.getState().googleMap;

      // call to display the api maps result error a message if is required
      // @https://developers.google.com/maps/documentation/javascript/places#place_search_responses
      const callback = (results, status) => {
        switch (status) {
          case OK: {
            const newLocation = results.map((result) => ({
              place_id: result.formatted_address,
              formatted_address: result.formatted_address,
              location: {
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng(),
              },
            }));
            map.setCenter(newLocation[0].location);
            store.dispatch(setSearchFieldError(''));
            store.dispatch(setSearchInput(''));
            store.dispatch(saveLocations(newLocation));
          }
            break;
          case ZERO_RESULTS:
            store.dispatch(setSearchFieldError('we don\'t found any parking in this city'));
            break;
          case OVER_QUERY_LIMIT || REQUEST_DENIED || INVALID_REQUEST || UNKNOWN_ERROR: {
            store.dispatch(setSearchFieldError('error : please try again later'));
            break;
          }
          default:
            store.dispatch(toggleField(false));
            store.dispatch(setSearchInput(''));
        }
      };

      // if the search fied is not empty use the google map placeServive api
      if (store.getState().parking.searchInput !== '') {
        // query : required -> google search text
        // types : optional -> filter the google search @https://developers.google.com/maps/documentation/places/web-service/supported_types
        const request = {
          query: store.getState().parking.searchInput,
          types: ['parking'],
        };

        // @https://developers.google.com/maps/documentation/javascript/reference/places-service
        const searchResult = new maps.places.PlacesService(map);
        // consumne the google map api : search the request and return the result to the callback
        // https://developers.google.com/maps/documentation/javascript/reference/places-service#TextSearchRequest
        searchResult.textSearch(request, callback);
      }
      else {
        store.dispatch(setSearchFieldError('Please, enter a city name'));
      }

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default googleMapMiddleware;
