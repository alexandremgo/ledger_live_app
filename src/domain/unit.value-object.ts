/**
 * A unit describes a given representation of a currency for humans
 *
 * A currency can have many units, for instance, we can assume Euro have euros and cents.
 * We can define Bitcoin to have: bitcoin, mBTC, bit, satoshi (but that's up to us really).
 */
export type Unit = {
  /**
   * display name of a given unit (example: satoshi)
   */
  name: string;
  /**
   * string to use when formatting the unit. like 'BTC' or 'USD'
   */
  code: string;
  /**
   * number of digits after the '.' in context of this unit
   */
  magnitude: number;
};
