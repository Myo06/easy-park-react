// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import Components
import Header from 'src/components/Header';
import Search from 'src/containers/Search';
import Map from 'src/containers/Map';
import Footer from 'src/components/Footer';

// == Import
import './app.scss';

// == Composant
const App = ({
  handleOnLoadApp,
  defaultLocationIsLoaded,
}) => {
  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
      const currentUserPosition = { lat, lng };
      handleOnLoadApp(currentUserPosition);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Search />
      {defaultLocationIsLoaded && <Map /> }
      <Footer />
    </div>
  );
};

App.propTypes = {
  // initialize the defaultLocation state
  handleOnLoadApp: PropTypes.func.isRequired,
  // waiting for the navigator.geolocation api
  defaultLocationIsLoaded: PropTypes.bool.isRequired,
};

// == Export
export default App;
