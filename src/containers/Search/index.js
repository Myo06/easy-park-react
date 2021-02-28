import { connect } from 'react-redux';

// === actions
import {
  setSearchInput,
  toggleSearchField,
} from 'src/actions/parking';

import {
  fetchParkings,
} from 'src/actions/googleMap';

// === presentational component
import Search from 'src/components/Search';

// === mapStateToProps
const mapStateToProps = (state) => ({
  searchInput: state.parking.searchInput,
  searchFieldError: state.parking.searchFieldError,
  searchFieldIsActived: state.parking.searchFieldIsActived,
  searchFieldIsLocked: state.parking.searchFieldIsLocked,
  maps: state.googleMap.maps,
  mapIsLoaded: state.googleMap.mapIsLoaded,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleOnChangeSearchInput: (searchInputValue) => dispatch(setSearchInput(searchInputValue)),
  handleOnValidateSearchInput: () => dispatch(fetchParkings()),
  handleOnFocusSearchInput: (toTrue) => dispatch(toggleSearchField(toTrue)),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Search);
