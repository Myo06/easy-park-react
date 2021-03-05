// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames';

// == Import Components
import Loader from 'src/components/Custom/Loader';
import LocationPin from './LocationPin';

// == Import
import './map.scss';

// == Composant
const Map = ({
  handleOnGoogleApiLoaded,
  locations,
  defaultLocation,
  googleMapIsLoaded,
}) => {
  const manageGoogleApiLoaded = ({ map, maps }) => {
    handleOnGoogleApiLoaded(map, maps);
  };

  // transition to display the location count result
  const resultCss = classNames('map__result', { hasResult: locations.length > 0 });
  const googleMapCss = classNames('map__googleMap', { hasResult: locations.length > 0 });
  return (
    <div className="map">
      <div className={resultCss}>
        {locations.length > 0 ? `${locations.length} parkings found` : ''}
      </div>
      <div className={googleMapCss}>
        { !googleMapIsLoaded && <Loader /> }
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
  // set to true when the google map is loader
  googleMapIsLoaded: PropTypes.bool.isRequired,
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
