// === import npm
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

// === import component
import Search from 'src/components/Search';

describe('<Search />', () => {
  const placeholder = 'Search on map';
  const searchInput = '';
  const handleOnChangeSearchInput = spy();
  const handleOnValidateSearchInput = spy();
  const handleOnFocusSearchInput = spy();
  const maps = {};
  const googleMapIsLoaded = false;
  let searchFieldError = 'error';
  const searchFieldIsActived = false;
  const searchFieldIsLocked = false;

  it('have a label with error', () => {
    const wrapper = shallow(
      <Search
        searchInput={searchInput}
        searchFieldError={searchFieldError}
        maps={maps}
        handleOnChangeSearchInput={handleOnChangeSearchInput}
        handleOnValidateSearchInput={handleOnValidateSearchInput}
        handleOnFocusSearchInput={handleOnFocusSearchInput}
        googleMapIsLoaded={googleMapIsLoaded}
        searchFieldIsActived={searchFieldIsActived}
        searchFieldIsLocked={searchFieldIsLocked}
      />,
    );
    const label = wrapper.find('label');
    expect(label).to.have.length(1);
    expect(label.text()).to.equal(searchFieldError);
  });

  it('have a label without error', () => {
    searchFieldError = '';
    const wrapper = shallow(
      <Search
        searchInput={searchInput}
        searchFieldError={searchFieldError}
        maps={maps}
        handleOnChangeSearchInput={handleOnChangeSearchInput}
        handleOnValidateSearchInput={handleOnValidateSearchInput}
        handleOnFocusSearchInput={handleOnFocusSearchInput}
        googleMapIsLoaded={googleMapIsLoaded}
        searchFieldIsActived={searchFieldIsActived}
        searchFieldIsLocked={searchFieldIsLocked}
      />,
    );
    const label = wrapper.find('label');
    expect(label).to.have.length(1);
    expect(label.text()).to.equal(placeholder);
  });
});
