// Palindrome checker
//Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
function palindrome(str) {
  let alphanumericalOnly = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = alphanumericalOnly.split("").reverse().join("");
  return alphanumericalOnly == reversed;
}
palindrome("A man, a plan, a canal. Panama");

// Roman numeral converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
function convertToRoman(num) {
  let romanNumeral = "";
  let romanValues = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i].value) {
      romanNumeral += romanValues[i].numeral;
      num -= romanValues[i].value;
    }
  }
  return romanNumeral;
}
console.log(convertToRoman(36));
console.log(convertToRoman(83));
console.log(convertToRoman(99));
console.log(convertToRoman(3999));
