import reverseString from "./reverseString";

test("reverse single word", () => {
  expect(reverseString("test")).toBe("tset");
});

test("reverse multiple words", () => {
  expect(reverseString("fly to mars")).toBe("sram ot ylf");
});

test("reverse numbers", () => {
  expect(reverseString("12345")).toBe("54321");
});
