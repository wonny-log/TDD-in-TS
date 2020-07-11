import Money from "./Money";

export default class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
