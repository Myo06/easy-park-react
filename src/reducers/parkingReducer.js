import {
  SET_SEARCH_INPUT,
  TOGGLE_FIELD,
  SET_SEARCH_FIELD_ERROR,
} from 'src/actions/parking';

const initialState = {
  searchInput: '',
  searchFieldError: '',
  searchFieldIsActived: false,
  searchFieldIsLocked: false,
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

    default:
      return state;
  }
}

export default parkingReducer;
