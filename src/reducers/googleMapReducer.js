import {
  SET_MAP,
} from 'src/actions/googleMap';

const initialState = {
  map: {},
  maps: {},
  googleMapIsLoaded: false,
};

function googleMapReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_MAP:
      return {
        ...state,
        map: action.map,
        maps: action.maps,
        googleMapIsLoaded: false,
      };
    default:
      return state;
  }
}

export default googleMapReducer;
