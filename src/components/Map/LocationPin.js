// == Import npm
import React from 'react';
import parkingIcon from 'src/assets/img/parkingIcon-48.png';

const LocationPin = ({ text }) => (
  <div className="locationPin">
    <img src={parkingIcon} className="locationPin__icon" alt="parking icon" />
    <p className="locationPin__text">{text}</p>
  </div>
);

export default LocationPin;
