import { connect } from 'react-redux';

// === actions
import {
  setSearchInput,
  toggleActiveSearchField,
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
  googleMapIsLoaded: state.googleMap.googleMapIsLoaded,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleOnChangeSearchInput: (searchInputValue) => dispatch(setSearchInput(searchInputValue)),
  handleOnValidateSearchInput: () => dispatch(fetchParkings()),
  handleOnFocusSearchInput: (toTrue) => dispatch(toggleActiveSearchField(toTrue)),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Search);
