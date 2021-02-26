export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const TOGGLE_FIELD = 'TOGGLE_FIELD';

export const setSearchInput = (searchInputValue) => ({
  type: SET_SEARCH_INPUT,
  searchInputValue,
});

export const toggleField = (newValue) => ({
  type: TOGGLE_FIELD,
  newValue,
});
