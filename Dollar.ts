import Money from "./Money";

export default class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
