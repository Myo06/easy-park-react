import { connect } from 'react-redux';
// === actions
import {
  setMap,
} from 'src/actions/googleMap';

// === presentational component
import Map from 'src/components/Map';

// === mapStateToProps
const mapStateToProps = (state) => ({
  locations: state.parking.locations,
  defaultLocation: state.parking.defaultLocation,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleOnGoogleApiLoaded: (map, maps) => dispatch(setMap(map, maps)),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Map);
