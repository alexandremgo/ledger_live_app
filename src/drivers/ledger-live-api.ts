import LedgerLiveApi, { WindowMessageTransport } from '@ledgerhq/live-app-sdk';
import { Account, Currency } from '@ledgerhq/live-app-sdk';
export { LedgerLiveApi };

export interface LedgerLiveApiInterface {
  connect(): void;
  disconnect(): void;
  listAccounts(): Promise<Account[]>;
  listCurrencies(params?: { name?: string; ticker?: string }): Promise<Currency[]>;
}

let llapi: LedgerLiveApiInterface;

export const getLlapi = () => {
  if (!llapi) {
    llapi = new LedgerLiveApi(new WindowMessageTransport());
    llapi.connect();
  }

  return llapi;
};

export const disconnectLlapi = () => {
  if (llapi) {
    void llapi.disconnect();
  }
};
