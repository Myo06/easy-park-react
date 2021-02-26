export const FETCH_PARKINGS = 'FETCH_PARKINGS';
export const SET_MAP = 'SET_MAP';

export const fetchParkings = () => ({
  type: FETCH_PARKINGS,
});

export const setMap = (map, maps) => ({
  type: SET_MAP,
  map,
  maps,
});
