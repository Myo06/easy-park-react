// === actions
import {
  FETCH_PARKINGS,
} from 'src/actions/googleMap';

import {
  toggleActiveSearchField,
  toggleLockSearchField,
  setSearchInput,
  setSearchFieldError,
  saveLocations,
  addCacheLocations,
} from 'src/actions/parking';

// === utils
import {
  getCenterLocation,
} from 'src/utils';

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
      const callback = (results, status, pagination) => {
        switch (status) {
          case OK: {
            const { cacheLocations } = store.getState().parking;
            const newLocation = results.map((result) => ({
              place_id: result.place_id,
              name: result.name,
              formatted_address: result.formatted_address,
              location: {
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng(),
              },
            }));
            const result = [...cacheLocations, ...newLocation];

            if (pagination.hasNextPage) {
              store.dispatch(addCacheLocations(result));
              pagination.nextPage();
            }
            else {
              // unlock the search field
              store.dispatch(toggleLockSearchField(false));
              // center the map to the first location
              map.setCenter(getCenterLocation(result));
              // reset error and input value
              store.dispatch(setSearchFieldError(''));
              store.dispatch(setSearchInput(''));
              // save the locations to the store
              store.dispatch(saveLocations(result));
            }
            break;
          }
          case ZERO_RESULTS:
            store.dispatch(setSearchFieldError('we don\'t found any parking in this city'));
            store.dispatch(toggleLockSearchField(false));
            break;
          case OVER_QUERY_LIMIT: {
            store.dispatch(setSearchFieldError('error : The search count limit has been exceeded, please try again later'));
            // unlock the search field
            store.dispatch(toggleLockSearchField(false));
            break;
          }
          case REQUEST_DENIED || INVALID_REQUEST || UNKNOWN_ERROR: {
            store.dispatch(setSearchFieldError('error : please try again later'));
            // unlock the search field
            store.dispatch(toggleLockSearchField(false));
            break;
          }
          default:
            // unlock the search field
            store.dispatch(toggleLockSearchField(false));
            // unactive the search field
            store.dispatch(toggleActiveSearchField(false));
            store.dispatch(setSearchInput(''));
        }
      };
      // if the search fied is not empty use the google map placeServive api
      if (store.getState().parking.searchInput !== '') {
        // lock the search field
        store.dispatch(toggleLockSearchField(true));

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
