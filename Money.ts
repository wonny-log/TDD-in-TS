import Dollar from "./Dollar";
import Franc from "./Franc";

export default class Money {
  _amount: number;
  _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  equals(object: Object): boolean {
    const money: Money = object as Money;
    return (
      this._amount === money._amount &&
      this.constructor.name === money.constructor.name
    );
  }

  times(): Money {}

  get currency(): string {
    return this.currency;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Franc {
    return new Franc(amount, "CHF");
  }
}
