import { SET_SEARCH_INPUT } from 'src/actions/parking';

const initialState = {
  searchInput: '',
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
