import { SET_SEARCH_INPUT } from 'src/actions/parking';

const initialState = {
  searchInput: '',
  searchInputError: '',
  searchInputIsFocussed: false,
  searchInputIsLocked: false,
};

function parkingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInputValue,
      };

    default:
      return state;
  }
}

export default parkingReducer;
