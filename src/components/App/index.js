// == Import npm
import React from 'react';

// == Import Components
import Header from 'src/components/Header';
import Search from 'src/containers/Search';
import Map from 'src/containers/Map';
import Footer from 'src/components/Footer';

// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Search />
    <Map />
    <Footer />
  </div>
);

// == Export
export default App;
