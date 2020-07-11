import Dollar from "./Dollar";

describe("testMultiplication", () => {
  test("1. 다중 통화를 지원하는 Money 객체", () => {
    const five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
