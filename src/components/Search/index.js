// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import Components

// == Import
import './search.scss';

// == Compenents
const Search = ({
  searchInput,
  handleOnChangeSearchInput,
  handleOnValidateSearchInput,
  handleOnFocusSearchInput,
  searchFieldError,
  searchFieldIsActived,
  searchFieldIsLocked,
}) => {
  // placeholder or label text
  const placeholder = 'Search on map';

  // searchFieldIsActived to false
  // request google api
  // searchFieldIsLocked to true untill the end of the api request to google
  const manageOnSubmitForm = (event) => {
    event.preventDefault();
    handleOnValidateSearchInput();
  };

  const isLocked = classNames('', { lock: searchFieldIsLocked });
  const isActive = classNames('', { active: searchFieldIsActived });

  return (
    <form className="search" onSubmit={manageOnSubmitForm}>
      <div className={`search__field ${isLocked} ${isActive}`}>
        <input
          id="search__inputId"
          placeholder={placeholder}
          type="text"
          value={searchInput}
          onChange={(event) => handleOnChangeSearchInput(event.currentTarget.value)}
          onBlur={handleOnValidateSearchInput}
          onFocus={() => handleOnFocusSearchInput(true)}
        />
        <label htmlFor="search__inputId" className={searchFieldError && 'error'}>
          {searchFieldError || placeholder}
        </label>
      </div>
    </form>
  );
};

Search.propTypes = {
  // controlled search input value
  searchInput: PropTypes.string.isRequired,
  // change the search input value
  handleOnChangeSearchInput: PropTypes.func.isRequired,
  // onBlur || onSubmit : send a request to the google map api with the search input value
  handleOnValidateSearchInput: PropTypes.func.isRequired,
  // on focus : change the display input
  handleOnFocusSearchInput: PropTypes.func.isRequired,
  // if the search parking failled contain the error message
  searchFieldError: PropTypes.string.isRequired,
  // if the search field is on focus
  searchFieldIsActived: PropTypes.bool.isRequired,
  // remains locked for the data loading
  searchFieldIsLocked: PropTypes.bool.isRequired,
};

// == Export
export default Search;
