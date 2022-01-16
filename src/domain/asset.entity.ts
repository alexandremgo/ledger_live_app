import { formatCurrencyUnit } from '@ledgerhq/live-common/lib/currencies';
import { Currency } from './currency.value-object';
import { Account } from './account.value-object';

// For simplication, the id is the same as the one from the associated account
export type AssetId = string;

export type AssetProps = {
  account: Account;
  currency: Currency;
};

/**
 * Represents a crypto-currency own by the user
 */
export class Asset {
  id: AssetId;
  props: AssetProps;

  private constructor(props: AssetProps, id: AssetId) {
    this.id = id;
    this.props = props;
  }

  static hydrate(props: AssetProps, id: AssetId): Asset {
    return new Asset(props, id);
  }

  get accountName() {
    return this.props.account.name;
  }

  get balance() {
    return this.props.account.balance;
  }

  get currencyName() {
    return this.props.currency.name;
  }

  balanceToString(): string {
    if (this.props.currency.units.length === 0) {
      return this.props.account.balance.toString();
    }
    return formatCurrencyUnit(this.props.currency.units[0], this.props.account.balance);
  }
}
