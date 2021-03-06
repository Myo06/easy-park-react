// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import parkingIcon from 'src/assets/img/parkingIcon-48.png';

const LocationPin = ({ name, address }) => (
  <div className="locationPin">
    <img src={parkingIcon} className="locationPin__icon" alt="parking icon" title={`${name} - ${address}`} />
  </div>
);

LocationPin.propTypes = {
  // current locationPin name
  name: PropTypes.string.isRequired,
  // current locationPin address
  address: PropTypes.string.isRequired,
};

export default LocationPin;
