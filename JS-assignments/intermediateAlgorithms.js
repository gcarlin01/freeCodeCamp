// Sum all numbers in a range
function sumAll(arr) {
  // We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
  // For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
  let sortedArr = arr.sort((a, b) => a - b);
  let sumRange = 0;
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sumRange += i;
  }
  return sumRange;
}
console.log(sumAll([4, 1]));

// Diff two arrays
function diffArray(arr1, arr2) {
  // Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  // Note: You can return the array with its elements in any order.
  let newArr = [];
  // I first filter arr1 by passing the function to check which of its element is not included in arr2
  let checkerArr1 = arr1.filter((element) => !arr2.includes(element));
  // I do the same to arr2
  let checkerArr2 = arr2.filter((element) => !arr1.includes(element));
  // concat both results in this newArr
  newArr = checkerArr1.concat(checkerArr2);
  return newArr;
}
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

// Seek and Destroy
// You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
//function destroyer(arg) {
function destroyer(initialArray, ...args) {
  let arraychecker = initialArray.filter((element) => !args.includes(element));
  return arraychecker;
}
console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan"
  )
);

// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);
  let filtered = collection.filter((object) =>
    sourceKeys.every((key) => object[key] == source[key])
  );
  return filtered;
}
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

// Spinal tap case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  let uppercaseReplacement = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let result = uppercaseReplacement.replace(/\s|_/g, "-").toLowerCase();
  return result;
}
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));

// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:
// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
  let startsVowel = /^[aeiou]/;
  let noVowel = /^[^aeiou]+$/;
  if (str.match(startsVowel)) {
    return str + "way";
  } else {
    if (str.match(noVowel)) {
      return str + "ay";
    } else {
      return str.replace(/([^aeiou]+)([a-z]+)/g, "$2$1" + "ay");
    }
  }
}
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));

// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
function myReplace(str, before, after) {
  let afterUppercase;
  if (before.charAt(0) == before.charAt(0).toUpperCase()) {
    afterUppercase = after.charAt(0).toUpperCase() + after.slice(1);
  } else if (after.charAt(0) == after.charAt(0).toUpperCase()) {
    afterUppercase = after.charAt(0).toLowerCase() + after.slice(1);
  } else {
    afterUppercase = after;
  }
  let result = str.replace(before, afterUppercase);
  return result;
}
console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));

// // Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  let strToArray = str.split("");
  let result = [];
  // = pairs.strToArray;
  for (let i = 0; i < strToArray.length; i++) {
    let conversion = strToArray[i];
    let pairConversion = pairs[conversion];
    result.push([conversion, pairConversion]);
  }
  return result;
}
console.log(pairElement("GCG")); // should return [["G", "C"], ["C","G"], ["G", "C"]]

// Missing Letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let startingPoint = alphabet.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    let alphabetChecker = alphabet[startingPoint + i];
    if (str[i] !== alphabetChecker) {
      return alphabetChecker;
    }
  }
}
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));

// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.
function uniteUnique(first, ...arr) {
  let joined = first.concat(...arr);
  let filtered = joined.filter((elem, i, array) => i == array.indexOf(elem));
  return filtered;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

// Convert HTML entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  let entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  let splitter = str.split("");
  let result = splitter.map((element) => entities[element] || element).join("");
  return result;
}
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
