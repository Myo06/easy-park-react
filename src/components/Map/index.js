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
      <div className="map__result">
        {locations.length > 0 ? `${locations.length} parkings found` : ''}
      </div>
      <div className="map__googleMap">
        {/* @https://github.com/google-map-react/google-map-react */}
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDGJxYP-vCDCkavOIR3GyDWxVVVziIu6vI',
            libraries: 'places',
            inputtype: 'textquery',
          }}
          language="fr"
          center={defaultLocation}
          defaultZoom={13}
          onGoogleApiLoaded={manageGoogleApiLoaded}
          yesIWantToUseGoogleMapApiInternals
        >
          { locations.map((location) => (
            <LocationPin
              lat={location.location.lat}
              lng={location.location.lng}
              name={location.name}
              address={location.formatted_address}
              key={location.place_id}
            />
          ))}
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
    formatted_address: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

Map.defaultProps = {
  defaultLocation: {
    formatted_address: '',
    lat: 0,
    lng: 0,
  },
};

// == Export
export default Map;
