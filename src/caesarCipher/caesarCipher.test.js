import caesarCipher from "./caesarCipher";

test("wrapping from z to a", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 3)).toBe(
    "defghijklmnopqrstuvwxyzabc"
  );
});

test("wrapping from z to a", () => {
  expect(caesarCipher("defghijklmnopqrstuvwxyzabc", 3)).toBe(
    "ghijklmnopqrstuvwxyzabcdef"
  );
});

test("keeping the same case", () => {
  expect(caesarCipher("aBcD", 3)).toBe("dEfG");
});

test("punctuation", () => {
  expect(caesarCipher("This is just a taste, Garry.", 25)).toBe(
    "Sghr hr itrs z szrsd, Fzqqx."
  );
});
