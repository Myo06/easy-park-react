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
  searchInputError,
  searchInputIsFocussed,
  searchInputIsLocked,
}) => {

  const placeholder = 'Search on map';
  const manageOnSubmitForm = (event) => {
    event.preventDefault();
    handleOnBlurSearchInput();
  };

  
  return (
    <form className="search" onSubmit={manageOnSubmitForm}>
      <div className="search__field">
        <input
          id="search__inputId"
          placeholder={placeholder}
          type="text"
          value={searchInput}
          onChange={(event) => handleOnChangeSearchInput(event.currentTarget.value)}
          onBlur={handleOnBlurSearchInput}
        />
        <label htmlFor="search__inputId" className={searchInputError && 'error'}>
          {searchInputError || placeholder}
        </label>
      </div>
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
  // if the search parking failled contain the error message
  searchInputError: PropTypes.string.isRequired,
  // if the search input is focussed
  searchInputIsFocussed: PropTypes.bool.isRequired,
  // remains locked for the data loading
  searchInputIsLocked: PropTypes.bool.isRequired,
};

// == Export
export default Search;
