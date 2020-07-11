import Expression from "./Expression";

export default class Money implements Expression {
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

  plus(addend: Money): Expression {
    return new Money(this._amount + addend._amount, this.currency);
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
