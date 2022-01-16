import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getLlapi, disconnectLlapi } from './drivers/ledger-live-api';
import { assetRepository } from './repositories/asset-repository';

// Inits the necessary drivers and repositories
// Here we could mock the ledger-live-api to test other accounts, currencies etc.
// This mock could be set up depending on an env variable
const llapi = getLlapi();
assetRepository(llapi);

// Shuts down gracefully
const teardown = () => {
  disconnectLlapi();
};

ReactDOM.render(
  <React.StrictMode>
    <App teardown={teardown} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
