import { Unit } from './unit.value-object';

/**
 * A cryptocurrency model
 */
export type Currency = {
  /**
   * Represents the currency type. For now only "CryptoCurrency" is handled
   * @see {@link https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/src/types.ts|cryptoassets types} in ledgerjs for more infos
   */
  type: string;
  /**
   * Used for UI
   */
  color: string;
  /**
   * The ticker name in exchanges / countervalue apis (e.g. BTC).
   */
  ticker: string;
  /**
   * The unique internal id of the cryptocurrency
   */
  id: string;
  /**
   * The display name of the cryptocurrency
   */
  name: string;
  /**
   * The [[FAMILIES | family]] of the cryptocurrency
   */
  family: string;
  /**
   * The array of available [[Unit | units]] for the cryptocurrency
   */
  units: Unit[];
};
