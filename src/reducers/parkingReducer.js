import {
  SET_SEARCH_INPUT,
  TOGGLE_FIELD,
  SET_SEARCH_FIELD_ERROR,
  SAVE_LOCATIONS,
  SAVE_DEFAULT_LOCATION,
} from 'src/actions/parking';

const initialState = {
  searchInput: '',
  searchFieldError: '',
  searchFieldIsActived: false,
  searchFieldIsLocked: false,
  locations: [],
  defaultLocation: {},
  defaultLocationIsLoaded: false,
};

function parkingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInputValue,
      };
    case TOGGLE_FIELD:
      return {
        ...state,
        searchFieldIsActived: action.newValue,
      };

    case SET_SEARCH_FIELD_ERROR:
      return {
        ...state,
        searchFieldError: action.errorMessage,
      };

    case SAVE_LOCATIONS:
      return {
        ...state,
        locations: action.locations,
      };

    case SAVE_DEFAULT_LOCATION:
      return {
        ...state,
        defaultLocation: action.location,
        defaultLocationIsLoaded: true,
      };

    default:
      return state;
  }
}

export default parkingReducer;
