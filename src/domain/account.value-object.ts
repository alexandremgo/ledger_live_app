import { BigNumber } from 'bignumber.js';

/**
 * A ledger live cryptocurrency account
 */
export type Account = {
  /**
   * The unique identifier of this account used internally by Ledger Live software
   */
  id: string;
  /**
   * The account’s name set by the user.
   */
  name: string;
  /**
   * The "next" public address where a user should receive funds. In the context of Bitcoin, the address is "renewed" each time funds are received in order to allow some privacy. In other blockchains, the address might never change
   */
  address: string;
  /**
   * The associated cryptocurrency id of the Account
   */
  currency: string;
  /**
   * The total amount of assets that this account holds
   */
  balance: BigNumber;
  /**
   * The amount of the balance that can be spent. Most of the time it will be equal to the balance, but this can vary in some blockchains
   */
  spendableBalance: BigNumber;
  /**
   * Tracks the current blockchain block height
   */
  blockHeight: number;
  /**
   * The date of the last time a synchronization was performed. In other words, tracks how up-to-date the Account data is
   */
  lastSyncDate: Date;
};
