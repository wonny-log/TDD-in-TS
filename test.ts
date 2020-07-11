import Franc from "./Franc";
import Money from "./Money";

describe("testMultiplication", () => {
  // test("1. 다중 통화를 지원하는 Money 객체", () => {
  //   const five: Dollar = new Dollar(5);
  //   five.times(2);
  //   expect(five.amount).toBe(10);
  // });

  // test("2. 타락한 객체", () => {
  //   const five: Dollar = new Dollar(5);
  //   let product: Dollar = five.times(2);
  //   expect(product.amount).toBe(10);
  //   product = five.times(3);
  //   expect(product.amount).toBe(15);
  // });

  // test("4. 프라이버시", () => {
  //   const five: Dollar = new Dollar(5);
  //   expect(five.times(2).equals(new Dollar(10))).toBe(true);
  //   expect(five.times(3).equals(new Dollar(15))).toBe(true);
  // });

  test("8. 객체 만들기", () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);
    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
  });
});

describe("testEquality", () => {
  // test("3. 모두를 위한 평등", () => {
  //   expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  //   expect(new Dollar(6).equals(new Dollar(5))).toBe(false);
  // });

  // test("7. 사과와 오렌지", () => {
  //   expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  //   expect(new Dollar(6).equals(new Dollar(5))).toBe(false);
  //   expect(new Franc(5).equals(new Franc(5))).toBe(true);
  //   expect(new Franc(6).equals(new Franc(5))).toBe(false);
  //   expect(new Dollar(5).equals(new Franc(5))).toBe(false);
  // });

  test("8. 객체 만들기", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(6).equals(Money.dollar(5))).toBe(false);
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(6).equals(Money.franc(5))).toBe(false);
    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
  });
});

describe("testFrancMultiplication", () => {
  test("5. 솔직히 말하자면", () => {
    const five: Franc = Money.franc(5);
    expect(five.times(2).equals(Money.franc(10))).toBe(true);
    expect(five.times(3).equals(Money.franc(15))).toBe(true);
  });
});

describe("testCurrency", () => {
  test("9. 우리가 사는 시간", () => {
    expect(Money.dollar(1).currency()).toBe("USD");
    expect(Money.franc(1).currency()).toBe("CHF");
  });
});
