import Dollar from "./Dollar";

describe("testMultiplication", () => {
  xtest("1. 다중 통화를 지원하는 Money 객체", () => {
    const five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });

  test("2. 타락한 객체", () => {
    const five: Dollar = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });
});
