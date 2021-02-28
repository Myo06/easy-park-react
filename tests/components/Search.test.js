
// === import npm
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// === import component
import Search from 'src/components/Search';


describe('<Search />', () => {
  it('Uses title given as props', () => {
    const titleValue = 'pizza';

    // on fait le rendu du composant
    const wrapper = shallow(<Search
      title={titleValue}
      thumbnail="img1.png"
      difficulty="facile"
      order={1}
      isFavorite={false}
    />);

    // rechercher les h2 et verifier qu'il est uniquem
    const h2Elements = wrapper.find('h2');
    expect(h2Elements).to.have.length(1);
    // verifier que le titleValue est bien le contenu du h2
    expect(h2Elements.text()).equal(titleValue);
  });
});
