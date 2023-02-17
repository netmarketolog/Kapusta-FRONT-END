import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  // <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter basename="/Kapusta-FRONT-END">
    <App />
  </BrowserRouter>
  // </PersistGate>
  // </Provider>
);
