// == Import npm
import React from 'react';
import { Provider } from 'react-redux';

// == Import
import store from 'src/store';
import './app.scss';

// == Composant
const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1>Composant : App</h1>
    </div>
  </Provider>
);

// == Export
export default App;
