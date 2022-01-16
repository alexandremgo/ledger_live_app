import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { getLlapi, disconnectLlapi, LedgerLiveApiInterface } from './drivers/ledger-live-api';
import { MockLedgerLiveApi } from './drivers/mock-ledger-live-api';
import { assetRepository } from './repositories/asset-repository';

// Inits the necessary drivers and repositories
// Here we can mock the ledger-live-api to test other accounts, currencies etc.
// This mock could be set up depending on an env variable for example.
const MOCK_LEDGER_LIVE_API_ENABLE = true;
let llapi: LedgerLiveApiInterface;

if (MOCK_LEDGER_LIVE_API_ENABLE) {
  llapi = new MockLedgerLiveApi();
}
else { 
  llapi = getLlapi();
}
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
