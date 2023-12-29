export default function caesarCipher(string, shift) {
  // Check if the shift is within the valid range (0 to 25)
  shift = shift % 26;

  const charArray = string.split("");

  const resultArray = charArray.map((char) => {
    if (char.match(/[a-zA-Z]/)) {
      let charCode = char.charCodeAt(0);

      charCode = charCode + shift;

      if (char.match(/[a-z]/) && charCode > 122) charCode -= 26; //a-z means lowercase 122 is z

      if (char.match(/[A-Z]/) && charCode > 90) charCode -= 26; //uppercase

      return String.fromCharCode(charCode);
    } else {
      // Return non-alphabetic characters unchanged
      return char;
    }
  });

  return resultArray.join("");
}
