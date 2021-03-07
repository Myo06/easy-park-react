// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Compenents

// == Import
import './searchIcon.scss';

// == Composant
const SearchIcon = ({
  handleOnClick,
  isLoading,
  icon,
}) => (
  <div className="searchIcon">
    { !isLoading && (
      <img
        className="searchIcon__icon"
        src={icon}
        alt="easy park logo"
        onClick={handleOnClick}
      />
    )}
    {/* @https://loading.io/css/ -> ldsring */}
    { isLoading && (
      <div className="searchIcon__loader">
        <div /><div /><div /><div />
      </div>
    )}
  </div>
);

SearchIcon.propTypes = {
  // handle a function on icon click
  handleOnClick: PropTypes.func.isRequired,
  // display the loader
  isLoading: PropTypes.bool.isRequired,
  // icon img
  icon: PropTypes.string.isRequired,
};

// == Export
export default SearchIcon;
