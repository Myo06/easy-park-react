export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const FETCH_PARKINGS = 'FETCH_PARKINGS';

export const setSearchInput = (searchInputValue) => ({
  type: SET_SEARCH_INPUT,
  searchInputValue,
})

export const fetchParkings = () => ({
  type: FETCH_PARKINGS,
})
