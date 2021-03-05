export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const TOGGLE_ACTIVE_SEARCH_FIELD = 'TOGGLE_ACTIVE_SEARCH_FIELD';
export const TOGGLE_LOCK_SEARCH_FIELD = 'TOGGLE_LOCK_SEARCH_FIELD';
export const SET_SEARCH_FIELD_ERROR = 'SET_SEARCH_FIELD_ERROR';
export const SAVE_LOCATIONS = 'SAVE_LOCATIONS';
export const ADD_CACHE_LOCATIONS = 'ADD_CACHE_LOCATIONS';
export const SAVE_DEFAULT_LOCATION = 'SAVE_DEFAULT_LOCATION';

export const setSearchInput = (searchInputValue) => ({
  type: SET_SEARCH_INPUT,
  searchInputValue,
});

export const toggleActiveSearchField = (newValue) => ({
  type: TOGGLE_ACTIVE_SEARCH_FIELD,
  newValue,
});

export const toggleLockSearchField = (newValue) => ({
  type: TOGGLE_LOCK_SEARCH_FIELD,
  newValue,
});

export const setSearchFieldError = (errorMessage) => ({
  type: SET_SEARCH_FIELD_ERROR,
  errorMessage,
});

export const saveLocations = (locations) => ({
  type: SAVE_LOCATIONS,
  locations,
});

export const addCacheLocations = (cacheLocations) => ({
  type: ADD_CACHE_LOCATIONS,
  cacheLocations,
});

export const saveDefaultLocation = (location) => ({
  type: SAVE_DEFAULT_LOCATION,
  location,
});
