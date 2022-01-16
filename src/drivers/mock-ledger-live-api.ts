/* eslint-disable @typescript-eslint/no-empty-function */
import { LedgerLiveApiInterface } from './ledger-live-api';
import { Account, Currency } from '@ledgerhq/live-app-sdk';
import BigNumber from 'bignumber.js';

export class MockLedgerLiveApi implements LedgerLiveApiInterface {
  connect = (): void => {};

  disconnect = (): void => {};

  listAccounts = async (): Promise<Account[]> => {
    return [
      {
        id: 'js:2:ethereum:0xmy_eth',
        name: 'my_eth',
        address: '0x',
        currency: 'ethereum',
        balance: new BigNumber('1500000000000000000'),
        spendableBalance: new BigNumber('1500000000000000000'),
        blockHeight: 14018340,
        lastSyncDate: new Date(),
      },
      {
        id: 'libcore:1:bitcoin:my_btc',
        name: 'my_btc',
        address: 'bc',
        currency: 'bitcoin',
        balance: new BigNumber('100000000'),
        spendableBalance: new BigNumber('100000000'),
        blockHeight: 719019,
        lastSyncDate: new Date(),
      },
      {
        id: 'js:2:stellar:my_xlm',
        name: 'my_xlm',
        address: 'xlm',
        currency: 'stellar',
        balance: new BigNumber('4000000000'),
        spendableBalance: new BigNumber('4000000000'),
        blockHeight: 166199716638359550,
        lastSyncDate: new Date(),
      },
      {
        id: 'js:2:polkadot:my_dot',
        name: 'my_dot',
        address: '',
        currency: 'polkadot',
        balance: new BigNumber('550000000000'),
        spendableBalance: new BigNumber('550000000000'),
        blockHeight: 14018340,
        lastSyncDate: new Date(),
      },
      {
        id: 'js:2:polygon:my_matic',
        name: 'my_matic',
        address: '0x',
        currency: 'polygon',
        balance: new BigNumber('210000000000000000000'),
        spendableBalance: new BigNumber('210000000000000000000'),
        blockHeight: 23797418,
        lastSyncDate: new Date(),
      },
    ];
  };

  listCurrencies = async (params?: { name?: string; ticker?: string }): Promise<Currency[]> => {
    return [
      {
        type: 'CryptoCurrency',
        id: 'bitcoin',
        ticker: 'BTC',
        name: 'Bitcoin',
        family: 'bitcoin',
        color: '#ffae35',
        units: [
          {
            name: 'bitcoin',
            code: 'BTC',
            magnitude: 8,
          },
          {
            name: 'mBTC',
            code: 'mBTC',
            magnitude: 5,
          },
          {
            name: 'bit',
            code: 'bit',
            magnitude: 2,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'ethereum',
        ticker: 'ETH',
        name: 'Ethereum',
        family: 'ethereum',
        color: '#0ebdcd',
        units: [
          {
            name: 'ether',
            code: 'ETH',
            magnitude: 18,
          },
          {
            name: 'Gwei',
            code: 'Gwei',
            magnitude: 9,
          },
          {
            name: 'Mwei',
            code: 'Mwei',
            magnitude: 6,
          },
          {
            name: 'Kwei',
            code: 'Kwei',
            magnitude: 3,
          },
          {
            name: 'wei',
            code: 'wei',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'bsc',
        ticker: 'BNB',
        name: 'Binance Smart Chain',
        family: 'ethereum',
        color: '#F0B90A',
        units: [
          {
            name: 'BNB',
            code: 'BNB',
            magnitude: 18,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'polkadot',
        ticker: 'DOT',
        name: 'Polkadot',
        family: 'polkadot',
        color: '#E6007A',
        units: [
          {
            name: 'DOT',
            code: 'DOT',
            magnitude: 10,
          },
          {
            name: 'planck',
            code: 'PLANCK',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'ripple',
        ticker: 'XRP',
        name: 'XRP',
        family: 'ripple',
        color: '#27a2db',
        units: [
          {
            name: 'XRP',
            code: 'XRP',
            magnitude: 6,
          },
          {
            name: 'drop',
            code: 'drop',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'litecoin',
        ticker: 'LTC',
        name: 'Litecoin',
        family: 'bitcoin',
        color: '#cccccc',
        units: [
          {
            name: 'litecoin',
            code: 'LTC',
            magnitude: 8,
          },
          {
            name: 'mLTC',
            code: 'mLTC',
            magnitude: 5,
          },
          {
            name: 'litoshi',
            code: 'litoshi',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'polygon',
        ticker: 'MATIC',
        name: 'Polygon',
        family: 'ethereum',
        color: '#6d29de',
        units: [
          {
            name: 'MATIC',
            code: 'MATIC',
            magnitude: 18,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'bitcoin_cash',
        ticker: 'BCH',
        name: 'Bitcoin Cash',
        family: 'bitcoin',
        color: '#3ca569',
        units: [
          {
            name: 'bitcoin cash',
            code: 'BCH',
            magnitude: 8,
          },
          {
            name: 'mBCH',
            code: 'mBCH',
            magnitude: 5,
          },
          {
            name: 'bit',
            code: 'bit',
            magnitude: 2,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'stellar',
        ticker: 'XLM',
        name: 'Stellar',
        family: 'stellar',
        color: '#000000',
        units: [
          {
            name: 'Lumen',
            code: 'XLM',
            magnitude: 7,
          },
          {
            name: 'stroop',
            code: 'stroop',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'dogecoin',
        ticker: 'DOGE',
        name: 'Dogecoin',
        family: 'bitcoin',
        color: '#65d196',
        units: [
          {
            name: 'dogecoin',
            code: 'DOGE',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'cosmos',
        ticker: 'ATOM',
        name: 'Cosmos',
        family: 'cosmos',
        color: '#16192f',
        units: [
          {
            name: 'Atom',
            code: 'ATOM',
            magnitude: 6,
          },
          {
            name: 'microAtom',
            code: 'uatom',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'dash',
        ticker: 'DASH',
        name: 'Dash',
        family: 'bitcoin',
        color: '#0e76aa',
        units: [
          {
            name: 'dash',
            code: 'DASH',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'tron',
        ticker: 'TRX',
        name: 'Tron',
        family: 'tron',
        color: '#D9012C',
        units: [
          {
            name: 'TRX',
            code: 'TRX',
            magnitude: 6,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'tezos',
        ticker: 'XTZ',
        name: 'Tezos',
        family: 'tezos',
        color: '#007BFF',
        units: [
          {
            name: 'XTZ',
            code: 'XTZ',
            magnitude: 6,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'elrond',
        ticker: 'EGLD',
        name: 'Elrond',
        family: 'elrond',
        color: '#1b46c2',
        units: [
          {
            name: 'EGLD',
            code: 'egld',
            magnitude: 18,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'ethereum_classic',
        ticker: 'ETC',
        name: 'Ethereum Classic',
        family: 'ethereum',
        color: '#3ca569',
        units: [
          {
            name: 'ETC',
            code: 'ETC',
            magnitude: 18,
          },
          {
            name: 'Gwei',
            code: 'Gwei',
            magnitude: 9,
          },
          {
            name: 'Mwei',
            code: 'Mwei',
            magnitude: 6,
          },
          {
            name: 'Kwei',
            code: 'Kwei',
            magnitude: 3,
          },
          {
            name: 'wei',
            code: 'wei',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'zcash',
        ticker: 'ZEC',
        name: 'Zcash',
        family: 'bitcoin',
        color: '#3790ca',
        units: [
          {
            name: 'zcash',
            code: 'ZEC',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'decred',
        ticker: 'DCR',
        name: 'Decred',
        family: 'bitcoin',
        color: '#2f74fb',
        units: [
          {
            name: 'decred',
            code: 'DCR',
            magnitude: 8,
          },
          {
            name: 'milli-decred',
            code: 'mDCR',
            magnitude: 5,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'digibyte',
        ticker: 'DGB',
        name: 'DigiByte',
        family: 'bitcoin',
        color: '#0066cc',
        units: [
          {
            name: 'digibyte',
            code: 'DGB',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'algorand',
        ticker: 'ALGO',
        name: 'Algorand',
        family: 'algorand',
        color: '#000000',
        units: [
          {
            name: 'ALGO',
            code: 'ALGO',
            magnitude: 6,
          },
          {
            name: 'uALGO',
            code: 'uALGO',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'qtum',
        ticker: 'QTUM',
        name: 'Qtum',
        family: 'bitcoin',
        color: '#2e9ad0',
        units: [
          {
            name: 'qtum',
            code: 'QTUM',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'bitcoin_gold',
        ticker: 'BTG',
        name: 'Bitcoin Gold',
        family: 'bitcoin',
        color: '#132c47',
        units: [
          {
            name: 'bitcoin gold',
            code: 'BTG',
            magnitude: 8,
          },
          {
            name: 'mBTG',
            code: 'mBTG',
            magnitude: 5,
          },
          {
            name: 'bit',
            code: 'bit',
            magnitude: 2,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'komodo',
        ticker: 'KMD',
        name: 'Komodo',
        family: 'bitcoin',
        color: '#326464',
        units: [
          {
            name: 'komodo',
            code: 'KMD',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'pivx',
        ticker: 'PIVX',
        name: 'PivX',
        family: 'bitcoin',
        color: '#46385d',
        units: [
          {
            name: 'pivx',
            code: 'PIVX',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'zencash',
        ticker: 'ZEN',
        name: 'Horizen',
        family: 'bitcoin',
        color: '#152f5c',
        units: [
          {
            name: 'zencash',
            code: 'ZEN',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'vertcoin',
        ticker: 'VTC',
        name: 'Vertcoin',
        family: 'bitcoin',
        color: '#1b5c2e',
        units: [
          {
            name: 'vertcoin',
            code: 'VTC',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'peercoin',
        ticker: 'PPC',
        name: 'Peercoin',
        family: 'bitcoin',
        color: '#3cb054',
        units: [
          {
            name: 'peercoin',
            code: 'PPC',
            magnitude: 6,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'viacoin',
        ticker: 'VIA',
        name: 'Viacoin',
        family: 'bitcoin',
        color: '#414141',
        units: [
          {
            name: 'viacoin',
            code: 'VIA',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'stakenet',
        ticker: 'XSN',
        name: 'Stakenet',
        family: 'bitcoin',
        color: '#141828',
        units: [
          {
            name: 'xsn',
            code: 'XSN',
            magnitude: 8,
          },
          {
            name: 'satoshi',
            code: 'sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'bitcoin_testnet',
        ticker: 'BTC',
        name: 'Bitcoin Testnet',
        family: 'bitcoin',
        color: '#00ff00',
        units: [
          {
            name: 'bitcoin',
            code: '𝚝BTC',
            magnitude: 8,
          },
          {
            name: 'mBTC',
            code: '𝚝mBTC',
            magnitude: 5,
          },
          {
            name: 'bit',
            code: '𝚝bit',
            magnitude: 2,
          },
          {
            name: 'satoshi',
            code: '𝚝sat',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'ethereum_ropsten',
        ticker: 'ETH',
        name: 'Ethereum Ropsten',
        family: 'ethereum',
        color: '#00ff00',
        units: [
          {
            name: 'ether',
            code: '𝚝ETH',
            magnitude: 18,
          },
          {
            name: 'Gwei',
            code: '𝚝Gwei',
            magnitude: 9,
          },
          {
            name: 'Mwei',
            code: '𝚝Mwei',
            magnitude: 6,
          },
          {
            name: 'Kwei',
            code: '𝚝Kwei',
            magnitude: 3,
          },
          {
            name: 'wei',
            code: '𝚝wei',
            magnitude: 0,
          },
        ],
      },
      {
        type: 'CryptoCurrency',
        id: 'cosmos_testnet',
        ticker: 'MUON',
        name: 'Cosmos (Testnet)',
        family: 'cosmos',
        color: '#16192f',
        units: [
          {
            name: 'Muon',
            code: 'MUON',
            magnitude: 6,
          },
          {
            name: 'microMuon',
            code: 'umuon',
            magnitude: 0,
          },
        ],
      },
    ];
  };
}
