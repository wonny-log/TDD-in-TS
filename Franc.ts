export default class Franc {
  _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this._amount * multiplier);
  }

  equals(object: Object): boolean {
    const franc: Franc = object as Franc;
    return this._amount === franc._amount;
  }
}
