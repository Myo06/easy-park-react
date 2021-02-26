import { 
  SET_SEARCH_INPUT,
  TOGGLE_FIELD,
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

    default:
      return state;
  }
}

export default parkingReducer;
