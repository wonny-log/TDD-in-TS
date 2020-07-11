import Dollar from "./Dollar";
import Franc from "./Franc";

export default class Money {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(object: Object): boolean {
    const money: Money = object as Money;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  times(): Money {}

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }
}
