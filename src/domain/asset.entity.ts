import { formatCurrencyUnit } from '@ledgerhq/live-common/lib/currencies';
import { Currency } from './currency.value-object';
import { Account } from './account.value-object';
import BigNumber from 'bignumber.js';

// For simplication, the id is the same as the one from the associated account
export type AssetId = string;

export type AssetProps = {
  account: Account;
  currency: Currency;
};

export type AssetValue = BigNumber;
export type AssetEvolution = AssetValue[];

export const MAX_EVOLUTION_DAY = 365;

/**
 * Represents a crypto-currency own by the user
 */
export class Asset {
  id: AssetId;
  props: AssetProps;
  private evolution: AssetEvolution;

  private constructor(props: AssetProps, id: AssetId) {
    this.id = id;
    this.props = props;
    this.evolution = Array(MAX_EVOLUTION_DAY + 1).fill(new BigNumber(this.props.account.balance));
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

  computeEvolution(annualGrowthPercentage: number) {
    const ratio = new BigNumber(annualGrowthPercentage).dividedBy(100);

    for (let day = 0; day < MAX_EVOLUTION_DAY + 1; day++) {
      this.evolution[day] = this.value.plus(
        this.value
          .multipliedBy(ratio.multipliedBy(new BigNumber(day)))
          .dividedBy(MAX_EVOLUTION_DAY),
      );
    }
  }
}
