// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Compenents

// == Import
import './searchIcon.scss';
import searchIcon from 'src/assets/img/searchIcon-48.png';

// == Composant
const SearchIcon = ({
  handleOnClick,
  isLoading,
}) => (
  <div className="searchIcon">
    { !isLoading && (
      <img
        className="searchIcon__icon"
        src={searchIcon}
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
};

// == Export
export default SearchIcon;
