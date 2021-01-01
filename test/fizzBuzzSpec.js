let { fizzBuzz, twoReduction, cashBack } = require("../fizzBuzz");
let assert = require("chai").assert;

describe.skip("Fizz Buzz", () => {
  it("should return 1", () => {
    assert.strictEqual(fizzBuzz(1), "1");
  });

  it("should return 2", () => {
    assert.strictEqual(fizzBuzz(2), "2");
  });

  it("should return Fizz", () => {
    assert.strictEqual(fizzBuzz(3), "Fizz");
  });

  it("should return 4", () => {
    assert.strictEqual(fizzBuzz(4), "4");
  });

  it("should return Buzz", () => {
    assert.strictEqual(fizzBuzz(5), "Buzz");
  });

  it("should return Fizz", () => assert.strictEqual(fizzBuzz(6), "Fizz"));

  it("should return Fizz Buzz", () => {
    assert.strictEqual(fizzBuzz(15), "Fizz Buzz");
    assert.strictEqual(fizzBuzz(30), "Fizz Buzz");
  });
});

describe.skip("2 reductions applied to product price", () => {
  let initialPrice = 10;

  it("should return the price 10 €", () => {
    assert.strictEqual(twoReduction(initialPrice, 0, 0), 10);
  });

  it("should return false when compare reduction", () => {
    assert.strictEqual(
      twoReduction(initialPrice, 10, 20),
      "L'ordre des réductions n'est pas exacte."
    );
  });

  it("should return the final price if the second reduction is valid", () => {
    assert.strictEqual(twoReduction(initialPrice, 20, 10), 7.2);
  });
});

describe("Cash back", () => {
  it("should return the value of the cash Back if paid with 1 bill of 5 euros", () => {
    assert.strictEqual(
      cashBack(1.12, 1.12),
      "the price is 1.12€ and i will give back nothing"
    );
  });

  it("should return the number of 1 cents cash back if price is 1 cents and paid with 2 cents", () => {
    assert.strictEqual(
      cashBack(0.01, 0.02),
      "the price is 0.01€ and i will cash back 0.01€, you will receive 1 coin(s) of 0.01€"
    );
  });

  it("should return 1 coins of 0.02 cents if price 0.01 cents and paid with 3 cents", () => {
    assert.strictEqual(
      cashBack(0.01, 0.03),
      "the price is 0.01€ and i will cash back 0.02€, you will receive 1 coin(s) of 0.02€"
    );
  });

  it("should return 2 coins of 0.02 cents if price 0.01 cents and paid with 5 cents", () => {
    assert.strictEqual(
      cashBack(0.01, 0.05),
      "the price is 0.01€ and i will cash back 0.04€, you will receive 2 coin(s) of 0.02€"
    );
  });

  it("should return 1 coin of 0.01 and 1 coin of 0.02 when price is 0.02 and paid 0.05 €", () => {
    assert.strictEqual(
      cashBack(0.02, 0.05),
      "the price is 0.02€ and i will cash back 0.03€, you will receive 1 coin(s) of 0.02€, 1 coin(s) of 0.01€"
    );
  });

  it("should return the correct sum if paid with 10 cents", () => {
    assert.strictEqual(cashBack(0.02, 0.1), "the price is 0.02€ and i will cash back 0.08€, you will receive 1 coin(s) of 0.05€, 1 coin(s) of 0.02€, 1 coin(s) of 0.01€");
  });
});
