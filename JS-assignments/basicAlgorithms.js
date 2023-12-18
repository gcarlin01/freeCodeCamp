// Celsius to Fahrenheit
function convertCtoF(celsius) {
  // // Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertCtoF(30));

// Reverse a String
function reverseString(str) {
  // Reverse the provided string and return the reversed string.
  // 1st try - extended but this is the idea
  // let splitString = str.split("");
  // let reverseArray = splitString.reverse();
  // let joinArray = reverseArray.join("");
  // return joinArray;
  // 2nd try chaining methods together which is more efficient
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// Factorialize a number
function factorialize(num) {
  // Return the factorial of the provided integer.
  // Setting our counter at 1 since 0 would always return 0 for multiplication
  let factorialResult = 1;
  // setting our i to start at 1 for the same reason
  for (let i = 1; i <= num; i++) {
    factorialResult *= i;
  }
  return factorialResult;
}
console.log(factorialize(5));

// Find the longest word in a string
function findLongestWordLength(str) {
  // Return the length of the longest word in the provided sentence.
  // Start by splitting the string into array of words
  const splitString = str.split(" ");
  // Setting our counter to an empty string
  let longestWord = "";
  for (let i = 0; i < splitString.length; i++) {
    // if statement to compare lenghts and add the longest to longestWord
    if (splitString[i].length > longestWord.length) {
      longestWord = splitString[i];
    }
  }
  return longestWord.length;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// Return largest numbers in arrays
function largestOfFour(arr) {
  // Return an array consisting of the largest number from each provided sub-array.
  let largestNumber = [];
  for (let i = 0; i < arr.length; i++) {
    // Setting the first number of group for future comparisson
    let maxPerGroup = arr[i][0];
    // Second for-loop to iterate within each subarray
    for (let j = 0; j < arr[i].length; j++) {
      // Comparisson if bigger than first number (index 0) within subarray then set the number as maxPerGroup
      if (arr[i][j] > maxPerGroup) {
        maxPerGroup = arr[i][j];
      }
    }
    // Pushing the maxPerGroup number (largest of subarray) to lasrgestNumber outside the subarray loop
    largestNumber.push(maxPerGroup);
  }
  return largestNumber;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
