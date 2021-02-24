// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Compenents

// == Import
import './search.scss';

// == Compenents
const Search = ({
  searchInput,
  handleOnChangeSearchInput,
  handleOnBlurSearchInput,
}) => {
  const manageOnSubmitForm = (event) => {
    event.preventDefault();
    handleOnBlurSearchInput();
  };

  return (
    <form className="search" onSubmit={manageOnSubmitForm}>
      <div className="search__introduction">
        Welcome to easy park, the best way to find a parking in your city
      </div>
      <input
        placeholder="Search on map"
        value={searchInput}
        onChange={(event) => handleOnChangeSearchInput(event.currentTarget.value)}
        onBlur={handleOnBlurSearchInput}
      />
    </form>
  );
}

Search.propTypes = {
  // controlled search input value
  searchInput: PropTypes.string.isRequired,
  // change the search input value
  handleOnChangeSearchInput: PropTypes.func.isRequired,
  // on blur : send a request to the google map api with the search input value
  handleOnBlurSearchInput: PropTypes.func.isRequired,
};

// == Export
export default Search;
