import Expression from "./Expression";
import Money from "./Money";

export default class Bank {
  rates: Map<string, number> = new Map();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string) {
    if (from === to) return 1;
    const rate = this.rates.get(this.formatRatePairString(from, to));
    return rate;
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(this.formatRatePairString(from, to), rate);
  }

  formatRatePairString(from: string, to: string) {
    return `${from}-${to}`;
  }
}
