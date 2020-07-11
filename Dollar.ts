export default class Dollar {
  _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this._amount * multiplier);
  }

  equals(object: Object): boolean {
    const dollar: Dollar = object as Dollar;
    return this._amount === dollar._amount;
  }
}
