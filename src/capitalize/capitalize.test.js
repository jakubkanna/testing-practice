import capitalize from "./capitalize";

test("single word starts with capital letter", () => {
  expect(capitalize("test")).toBe("Test");
});

test("sentence starts with capital letter", () => {
  expect(capitalize("we love doing tests.")).toBe("We love doing tests.");
});

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("string with all capital letters", () => {
  expect(capitalize("HELLO")).toBe("HELLO");
});

test("string with a number at the beginning", () => {
  expect(capitalize("123test")).toBe("123test");
});

test("string with a special character at the beginning", () => {
  expect(capitalize("@test")).toBe("@test");
});
