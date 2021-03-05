// === npm
import { expect } from 'chai';

// === reducers
import parkingReducer from 'src/reducers/parkingReducer';

// === actions
import {
  addCacheLocations,
  saveDefaultLocation,
  saveLocations,
  setSearchFieldError,
  setSearchInput,
  toggleLockSearchField,
  toggleActiveSearchField,
} from 'src/actions/parking';

// === data
const locationsExemple = [{
  place_id: '1',
  name: 'Nice Azur Parking',
  formatted_address: '5 Rue Alexandre , 06000 Nice, France',
  location: {
    lat: 43.6964413,
    lng: 7.2717599,
  },
}, {
  place_id: '2',
  name: 'Nice Parking',
  formatted_address: '5 Rue Alexandre , 06000 Nice, France',
  location: {
    lat: 43.6954656,
    lng: 7.2445459,
  },
}];

describe('reducer for parking', () => {
  it('is a function', () => {
    expect(parkingReducer).to.be.a('function');
  });

  it('test initial state', () => {
    const expectedInitialState = {
      cacheLocations: [],
      defaultLocation: {},
      defaultLocationIsLoaded: false,
      locations: [],
      searchFieldError: '',
      searchFieldIsActived: false,
      searchFieldIsLocked: false,
      searchInput: '',
    };
    expect(parkingReducer()).to.deep.equal(expectedInitialState);
  });

  it('check treatment of action ADD_CACHE_LOCATIONS', () => {
    const stateBefore = {
      cacheLocations: [],
    };

    const payload = {
      cacheLocations: locationsExemple,
    };

    const expectedStateAfter = {
      cacheLocations: payload.cacheLocations,
    };

    const action = addCacheLocations(payload.cacheLocations,);

    expect(parkingReducer(stateBefore, action)).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action SAVE_DEFAULT_LOCATION', () => {
    const stateBefore = {
      defaultLocation: {},
      defaultLocationIsLoaded: false,
    };

    const payload = {
      defaultLocation: {
        lat: 43.722342399999995,
        lng: 7.284326399999999,
      },
      defaultLocationIsLoaded: true,
    };

    const expectedStateAfter = {
      defaultLocation: payload.defaultLocation,
      defaultLocationIsLoaded: payload.defaultLocationIsLoaded,
    };

    const action = saveDefaultLocation(payload.defaultLocation, payload.defaultLocationIsLoaded);

    expect(parkingReducer(stateBefore, action)).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action SAVE_LOCATIONS', () => {
    const payload = {
      locations: locationsExemple,
      cacheLocations: [],
    };

    const stateBefore = {
      locations: {},
      cacheLocations: locationsExemple,
    };

    const expectedStateAfter = {
      locations: payload.locations,
      cacheLocations: payload.cacheLocations,
    };

    const action = saveLocations(payload.locations, payload.cacheLocations);

    expect(parkingReducer(stateBefore, action)).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action SET_SEARCH_FIELD_ERROR', () => {
    const stateBefore = {
      searchFieldError: '',
    };

    const payload = 'error message';

    const expectedStateAfter = {
      searchFieldError: payload,
    };

    const action = setSearchFieldError(payload);

    expect(parkingReducer(stateBefore, action)).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action SET_SEARCH_INPUT', () => {
    const stateBefore = {
      searchInput: '',
    };
    const payload = 'myNewSearchValue';

    const expectedStateAfter = {
      searchInput: payload,
    };

    const action = setSearchInput(payload);

    expect(parkingReducer(stateBefore, action)).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action TOGGLE_LOCK_SEARCH_FIELD', () => {
    const stateBefore = {
      searchFieldIsLocked: false,
    };

    const payload = true;

    const expectedStateAfter = {
      searchFieldIsLocked: payload,
    };

    const action = toggleLockSearchField(payload);

    expect(parkingReducer(stateBefore, action)).to.deep.equal(expectedStateAfter);
  });

  it('check treatment of action TOGGLE_ACTIVE_SEARCH_FIELD', () => {
    const stateBefore = {
      searchFieldIsActived: false,
    };

    const payload = true;

    const expectedStateAfter = {
      searchFieldIsActived: payload,
    };

    const action = toggleActiveSearchField(payload);

    expect(parkingReducer(stateBefore, action)).to.deep.equal(expectedStateAfter);
  });
});
