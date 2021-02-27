// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import parkingIcon from 'src/assets/img/parkingIcon-48.png';

const LocationPin = ({ name }) => (
  <div className="locationPin">
    <img src={parkingIcon} className="locationPin__icon" alt="parking icon" title={name} />
  </div>
);

LocationPin.propTypes = {
  // current locationPin adress
  name: PropTypes.string.isRequired,
};

export default LocationPin;
