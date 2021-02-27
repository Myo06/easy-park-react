// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

// == Import Components
import LocationPin from './LocationPin';

// == Import
import './map.scss';

// == Composant
const Map = ({
  handleOnGoogleApiLoaded,
  locations,
  defaultLocation,
}) => {
  const manageGoogleApiLoaded = ({ map, maps }) => {
    handleOnGoogleApiLoaded(map, maps);
  };
  return (
    <div className="map">
      <h2 className="map__title">Come Visit Us At Our Campus</h2>
      <div className="map__googleMap">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDGJxYP-vCDCkavOIR3GyDWxVVVziIu6vI',
            libraries: 'places',
            inputtype: 'textquery',
          }}
          language="fr"
          defaultCenter={defaultLocation}
          defaultZoom={15}
          onGoogleApiLoaded={manageGoogleApiLoaded}
          yesIWantToUseGoogleMapApiInternals
        >
          { locations.length > 0 && (
            locations.map((location) => (
              <LocationPin
                lat={location.location.lat}
                lng={location.location.lng}
                text={location.formatted_address}
                key={location.place_id}
              />
            ))
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
};

Map.propTypes = {
  // set the map to the state
  handleOnGoogleApiLoaded: PropTypes.func.isRequired,
  // contain the location result
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      place_id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  // contain the current user position
  defaultLocation: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

// == Export
export default Map;
