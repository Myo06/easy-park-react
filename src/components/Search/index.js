// == Import npm
import React, { useRef, useEffect } from 'react';
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
  maps,
  mapIsLoaded,
}) => {
  const searchInputRef = useRef(null);
  /* const autocomplete = useRef(null); */
  // placeholder or label text
  const placeholder = 'Search on map';

  // searchFieldIsActived to false
  // request google api
  // searchFieldIsLocked to true untill the end of the api request to google
  const manageOnSubmitForm = (event) => {
    event.preventDefault();
    handleOnValidateSearchInput();
  };

  const manageOnValidateAutoComplete = (autocomplete) => {
    handleOnChangeSearchInput(autocomplete.getPlace().name);
    handleOnValidateSearchInput();
  };

  useEffect(() => {
    if (mapIsLoaded) {
      const options = {
        componentRestrictions: { country: 'fr' },
        fields: ['name'],
      };
      const autocomplete = new maps.places.Autocomplete(searchInputRef.current, options);
      autocomplete.addListener('place_changed', () => manageOnValidateAutoComplete(autocomplete));
    }
  }, [searchInput]);

  const isLocked = classNames('', { lock: searchFieldIsLocked });
  const isActive = classNames('', { active: searchFieldIsActived });
  const isError = classNames('', { error: searchFieldError });

  return (
    <form className="search" onSubmit={manageOnSubmitForm}>
      <div className={`search__field ${isLocked} ${isActive} ${isError}`}>
        <input
          ref={searchInputRef}
          id="search__inputId"
          placeholder={placeholder}
          type="text"
          value={searchInput}
          onChange={(event) => handleOnChangeSearchInput(event.currentTarget.value)}
          onFocus={() => handleOnFocusSearchInput(true)}
          onBlur={() => handleOnFocusSearchInput(false)}
        />
        <label htmlFor="search__inputId">
          { searchFieldError !== '' ? searchFieldError : placeholder }
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
  // current googleMaps
  maps: PropTypes.object.isRequired,
  // when the map is loaded
  mapIsLoaded: PropTypes.bool.isRequired,
};

// == Export
export default Search;
