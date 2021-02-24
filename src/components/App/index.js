// == Import npm
import React from 'react';

// == Import Components
import Header from 'src/components/Header';
import Search from 'src/containers/Search';
import Map from 'src/components/Map';
import Footer from 'src/components/Footer';

// == Import
import './app.scss';

// == Composant
const App = () => (
  <>
    <Header />
    <Search />
    <Map />
    <Footer />
  </>
);

// == Export
export default App;