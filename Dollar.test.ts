import Dollar from "./Dollar";

describe("testMultiplication", () => {
  xtest("1. 다중 통화를 지원하는 Money 객체", () => {
    const five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });

  xtest("2. 타락한 객체", () => {
    const five: Dollar = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  test("4. 프라이버시", () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBe(true);
    expect(five.times(3).equals(new Dollar(15))).toBe(true);
  });
});

describe("testEquality", () => {
  test("3. 모두를 위한 평등", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(6).equals(new Dollar(5))).toBe(false);
  });
});
