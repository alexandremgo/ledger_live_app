import { Asset, MAX_EVOLUTION_DAY } from './asset.entity';
import BigNumber from 'bignumber.js';
BigNumber.config({ DECIMAL_PLACES: 10, ROUNDING_MODE: BigNumber.ROUND_FLOOR });

describe('asset.entity', () => {
  let defaultAsset: Asset;

  beforeEach(() => {
    defaultAsset = Asset.hydrate(
      {
        account: {
          id: 'ASSET_ID',
          name: 'Ethereum',
          address: 'ASSET_ADDRESS',
          currency: 'ethereum',
          balance: new BigNumber(2),
          spendableBalance: new BigNumber(2),
          blockHeight: 1,
          lastSyncDate: new Date(),
        },
        currency: {
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
      },
      'ASSET_ID',
    );
  });
  describe('computeEvolution', () => {
    test('When the annual growth is 0%, the asset evolution values should stay the same', () => {
      defaultAsset.computeEvolution(0);
      expect(defaultAsset.value).toEqual(defaultAsset.evolutionAtADay(MAX_EVOLUTION_DAY));
    });

    test('When the annual growth is 1%, it should compute correctly the asset evolution', () => {
      // Asset value = 2
      const expectedAfter1Year = new BigNumber('2.02');
      // 2 + 2*0.01*1/365
      const expectedAfter1Day = new BigNumber('2.0000547945');
      // 2 + 2*0.01*30/365
      const expectedAfter30Days = new BigNumber('2.0016438356');

      defaultAsset.computeEvolution(1);
      expect(defaultAsset.evolutionAtADay(MAX_EVOLUTION_DAY)).toEqual(expectedAfter1Year);
      expect(defaultAsset.evolutionAtADay(1)).toEqual(expectedAfter1Day);
      expect(defaultAsset.evolutionAtADay(30)).toEqual(expectedAfter30Days);
    });
  });
});
