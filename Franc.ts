import Money from "./Money";

export default class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
