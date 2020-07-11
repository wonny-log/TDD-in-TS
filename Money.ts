import Dollar from "./Dollar";
import Franc from "./Franc";

export default class Money {
  _amount: number;
  currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this.currency = currency;
  }

  equals(object: Object): boolean {
    const money: Money = object as Money;
    return this._amount === money._amount && this.currency === money.currency;
  }

  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this.currency);
  }

  toString(): string {
    return this._amount + " " + this.currency;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Franc {
    return new Franc(amount, "CHF");
  }
}
