import Expression from "./Expression";
import Sum from "./Sum";
import Bank from "./Bank";

export default class Money implements Expression {
  amount: number;
  currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(object: Object): boolean {
    const money: Money = object as Money;
    return this.amount === money.amount && this.currency === money.currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  toString(): string {
    return this.amount + " " + this.currency;
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
