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
}) => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  };

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
          defaultCenter={location}
          defaultZoom={10}
          onGoogleApiLoaded={manageGoogleApiLoaded}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

Map.propTypes = {
  // set the map to the state
  handleOnGoogleApiLoaded: PropTypes.func.isRequired,
};

// == Export
export default Map;
