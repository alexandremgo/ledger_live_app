import { assert } from '../utils/errors';
import { LedgerLiveApi } from '../drivers/ledger-live-api';
import { Asset } from '../domain/asset.entity';

export class AssetRepository {
  constructor(private readonly llapi: LedgerLiveApi) {}

  async getAll(): Promise<Asset[]> {
    const accounts = await this.llapi.listAccounts();
    const currencies = await this.llapi.listCurrencies();
    console.log({ accounts, currencies });

    return accounts.map<Asset>((account) => {
      const associatedCurrency = currencies.find((currency) => currency.id === account.currency);
      assert(associatedCurrency, 'An asset needs to be associated to a currency');
      return Asset.hydrate({ account, currency: associatedCurrency }, account.id);
    });
  }
}

let instance: AssetRepository;
export const assetRepository = (llapi?: LedgerLiveApi) => {
  if (!instance) {
    assert(llapi, 'An instance of LedgerLiveApi is necessary to instantiate an AssetRepository');
    instance = new AssetRepository(llapi);
  }

  return instance;
};
