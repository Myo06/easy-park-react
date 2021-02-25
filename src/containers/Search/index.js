import { connect } from 'react-redux';

// === actions
import { 
  setSearchInput,
  fetchParkings,
} from 'src/actions/parking';

// === presentational component
import Search from 'src/components/Search';

// === mapStateToProps
const mapStateToProps = (state) => ({
  searchInput: state.searchInput,
  searchInputError: state.searchInputError,
  searchInputIsActived: state.searchInputIsActived,
  searchInputIsLocked: state.searchInputIsLocked,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleOnChangeSearchInput: (searchInputValue) => dispatch(setSearchInput(searchInputValue)),
  handleOnBlurSearchInput: (query) => dispatch(fetchParkings(query)),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Search);
