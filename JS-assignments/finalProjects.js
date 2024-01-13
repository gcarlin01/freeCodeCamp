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

// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
  let charCode;
  let answerUncoded = "";
  for (let i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // in the charCode table #65 to #90 are all upperCase letters
      charCode = ((charCode - 65 + 13) % 26) + 65; // Removes the first 65 elements from the charCode so it only stays the 26 elements of the alphabet and then adds 13 for the ROT13 and uses the modulo operator to state that it cycles around the 26 elements of the alphablet, then adds 65 to place all the charCode elements in place
    }
    answerUncoded += String.fromCharCode(charCode);
  }
  return answerUncoded;
}
console.log(rot13("SERR PBQR PNZC"));

// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;
  let answer = regex.test(str);
  return answer;
}
console.log(telephoneCheck("1 555 555 5555"));
