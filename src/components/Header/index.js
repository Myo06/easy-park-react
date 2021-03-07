// == Import npm
import React from 'react';

// == Import Compenents

// == Import
import './header.scss';
import logo from 'src/assets/img/logo-200.png';

// == Composant
const Header = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="easy park logo" />
    <div className="header__slogan">
      Welcome to easy park, the best way to find a parking in your city
    </div>
  </header>
);

// == Export
export default Header;
