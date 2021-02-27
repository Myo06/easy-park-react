export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const TOGGLE_FIELD = 'TOGGLE_FIELD';
export const SET_SEARCH_FIELD_ERROR = 'SET_SEARCH_FIELD_ERROR';

export const setSearchInput = (searchInputValue) => ({
  type: SET_SEARCH_INPUT,
  searchInputValue,
});

export const toggleField = (newValue) => ({
  type: TOGGLE_FIELD,
  newValue,
});

export const setSearchFieldError = (errorMessage) => ({
  type: SET_SEARCH_FIELD_ERROR,
  errorMessage,
});
