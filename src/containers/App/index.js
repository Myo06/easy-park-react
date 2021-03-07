import { connect } from 'react-redux';

// === presentational component
import App from 'src/components/App';
import { saveDefaultLocation } from '../../actions/parking';

// === mapStateToProps
const mapStateToProps = (state) => ({
  locations: state.parking.locations,
  defaultLocationIsLoaded: state.parking.defaultLocationIsLoaded,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleOnLoadApp: (location) => dispatch(saveDefaultLocation(location)),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
