import Expression from "./Expression";
import Money from "./Money";
import Pair from "./Pair";

export default class Bank {
  rates: Map<Pair, number> = new Map();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string) {
    if (from === to) return 1;
    const rate = this.rates.get(new Pair(from, to));
    return rate;
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to), rate);
  }
}
