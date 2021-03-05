import {
  ADD_CACHE_LOCATIONS,
  SAVE_DEFAULT_LOCATION,
  SAVE_LOCATIONS,
  SET_SEARCH_FIELD_ERROR,
  SET_SEARCH_INPUT,
  TOGGLE_LOCK_SEARCH_FIELD,
  TOGGLE_ACTIVE_SEARCH_FIELD,
} from 'src/actions/parking';

const initialState = {
  cacheLocations: [],
  defaultLocation: {},
  defaultLocationIsLoaded: false,
  locations: [],
  searchFieldError: '',
  searchFieldIsActived: false,
  searchFieldIsLocked: false,
  searchInput: '',
};

function parkingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CACHE_LOCATIONS:
      return {
        ...state,
        cacheLocations: action.cacheLocations,
      };
    case SAVE_DEFAULT_LOCATION:
      return {
        ...state,
        defaultLocation: action.location,
        defaultLocationIsLoaded: true,
      };
    case SAVE_LOCATIONS:
      return {
        ...state,
        locations: action.locations,
        cacheLocations: [],
      };
    case SET_SEARCH_FIELD_ERROR:
      return {
        ...state,
        searchFieldError: action.errorMessage,
      };
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInputValue,
      };
    case TOGGLE_LOCK_SEARCH_FIELD:
      return {
        ...state,
        searchFieldIsLocked: action.newValue,
      };
    case TOGGLE_ACTIVE_SEARCH_FIELD:
      return {
        ...state,
        searchFieldIsActived: action.newValue,
      };
    default:
      return state;
  }
}

export default parkingReducer;
