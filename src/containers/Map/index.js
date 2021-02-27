import { connect } from 'react-redux';
// === actions
import {
  setMap,
} from 'src/actions/googleMap';

import {
  saveDefaultLocation,
} from 'src/actions/parking';

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
  /* handleOnChangeMap: () => dispatch(saveDefaultLocation()), */
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Map);
