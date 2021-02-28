// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import Components
import Header from 'src/components/Header';
import Search from 'src/containers/Search';
import Map from 'src/containers/Map';
import Loader from 'src/components/Custom/Loader';

// == Import
import './app.scss';

// == Composant
const App = ({
  handleOnLoadApp,
  defaultLocationIsLoaded,
}) => {
  useEffect(() => {
    // if the geolocation is not available
    const geoError = () => {
      // define Paris as default position
      const parisLocation = { lat: 48.84, lng: 2.39 };
      handleOnLoadApp(parisLocation);
    };
    // define the current user geolocation as the default position to center the googleMap
    navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
      const currentUserPosition = { lat, lng };
      handleOnLoadApp(currentUserPosition);
    }, geoError);
  }, []);

  return (
    <div className="app">
      <Header />
      <Search />
      {defaultLocationIsLoaded ? <Map /> : <Loader />}
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
