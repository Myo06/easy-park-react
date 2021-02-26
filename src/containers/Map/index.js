import { connect } from 'react-redux';

// === actions
import {
  setMap,
} from 'src/actions/googleMap';

// === presentational component
import Map from 'src/components/Map';

// === mapStateToProps

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleOnGoogleApiLoaded: (map, maps) => dispatch(setMap(map, maps)),
});

// === création de l'assistant
export default connect(null, mapDispatchToProps)(Map);
