import LedgerLiveApi, { WindowMessageTransport } from '@ledgerhq/live-app-sdk';
export { LedgerLiveApi };

let llapi: LedgerLiveApi;

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
