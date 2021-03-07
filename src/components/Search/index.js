// == Import npm
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import Components
import SearchIcon from 'src/components/Custom/SearchIcon';

// == Import
import './search.scss';
import searchIcon from 'src/assets/img/searchIcon-48.png';

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
  googleMapIsLoaded,
}) => {
  const searchInputRef = useRef(null);
  // placeholder or label text
  const placeholder = 'Search on map';

  /**
   * Request the textsearch googleApi
   * searchFieldIsActived to false && searchFieldIsLocked to true
  */
  const manageOnSubmitForm = (event) => {
    event.preventDefault();
    handleOnValidateSearchInput();
  };

  /**
   * Request the textsearch googleApi
   * @param {GoogleMap Autocomplete} - @https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.constructor
   * udapte the searchInput
   * searchFieldIsActived to false && searchFieldIsLocked to true
  */
  const manageOnValidateAutoComplete = (autocomplete) => {
    handleOnChangeSearchInput(autocomplete.getPlace().name);
  };

  useEffect(() => {
    if (googleMapIsLoaded) {
      const options = {
        componentRestrictions: { country: 'fr' },
        fields: ['name'],
      };
      // @https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.constructor
      const autocomplete = new maps.places.Autocomplete(searchInputRef.current, options);
      autocomplete.addListener('place_changed', () => manageOnValidateAutoComplete(autocomplete));
    }
  }, [searchFieldIsActived]);

  // === cssClass
  const isLocked = classNames('', { lock: searchFieldIsLocked || !googleMapIsLoaded });
  const isActive = classNames('', { active: searchFieldIsActived || searchFieldError });
  const isError = classNames('', { error: searchFieldError });

  return (
    <form className="search" onSubmit={manageOnSubmitForm}>
      <div className={`search__field ${isLocked} ${isActive} ${isError}`}>
        <SearchIcon
          handleOnClick={handleOnValidateSearchInput}
          isLoading={searchFieldIsLocked}
          icon={searchIcon}
        />
        <input
          ref={searchInputRef}
          id="search__inputId"
          placeholder={placeholder}
          type="text"
          value={searchInput}
          onChange={(event) => handleOnChangeSearchInput(event.currentTarget.value)}
          onFocus={() => handleOnFocusSearchInput(true)}
          onBlur={() => handleOnFocusSearchInput(false)}
          maxLength="65"
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
  googleMapIsLoaded: PropTypes.bool.isRequired,
};

// == Export
export default Search;
