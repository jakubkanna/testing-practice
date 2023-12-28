import calculator from "./calculator";

test("4 times 5 is 20", () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

test("throw error if not integer in multiplication", () => {
  expect(() => calculator.multiply("4", 5)).toThrow(
    "Both parameters must be integers"
  );
});

test("10 divided by 2 is 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("throw error if not integer in division", () => {
  expect(() => calculator.divide(10, "2")).toThrow(
    "Both parameters must be integers"
  );
});

test("throw null if divided by 0", () => {
  expect(calculator.divide(10, 0)).toBe(Infinity);
});

test("7 minus 4 is 3", () => {
  expect(calculator.subtract(7, 4)).toBe(3);
});

test("throw error if not integer in subtraction", () => {
  expect(() => calculator.subtract("7", 4)).toThrow(
    "Both parameters must be integers"
  );
});
