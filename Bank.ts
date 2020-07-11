import Expression from "./Expression";
import Money from "./Money";
import Sum from "./Sum";

export default class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
