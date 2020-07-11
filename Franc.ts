import Money from "./Money";

export default class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
