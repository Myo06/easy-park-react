// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
import store from 'src/store';

// Components
import App from 'src/containers/App';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);
const target = document.getElementById('root');
render(rootReactElement, target);
