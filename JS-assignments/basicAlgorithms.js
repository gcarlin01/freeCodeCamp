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

// Confirm the ending
function confirmEnding(str, target) {
  // Check if a string (first argument, str) ends with the given target string (second argument, target)
  // NOTE: this has to work using several characters string as target not just 1 character
  // 1st try easiest method is to use endsWith() but for this assignment they want me to use substring methods
  // if (str.endsWith(target)) {
  //   return true
  // } else {
  //   return false
  // }
  // or just
  // return str.endsWith(target)
  // 2nd try works, but only checks last character
  // let lastCharacter = str.length - 1;
  // if (target == str[lastCharacter]) {
  //   return true
  // } else {
  //   return false;
  // }
  // 3rd try using slice and comparing the target to our copy from right (end) to left (start) by using "-" and counting the lenght of our target
  // return str.slice(-target.length) == target
  // 4th try using regular expression, `` = template literals, ${} = embedded expression for our target and then the $ so it knows it goes at end and testing it towards our str
  return RegExp(`${target}$`).test(str);
}
console.log(confirmEnding("Bastian", "n"));

// Repeat a string n times
function repeatStringNumTimes(str, num) {
  // Repeat a given string str (first argument) for num times (second argument).  Return an empty string if num is not a positive number
  let result = "";
  if (num <= 0) {
    result = "";
  } else {
    for (let i = 1; i <= num; i++) {
      result += str;
    }
  }
  return result;
}
console.log(repeatStringNumTimes("abc", 3));

// Truncate a string
function truncateString(str, num) {
  // Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
  if (str.length > num) {
    // Slicing (0, num) does not include the last index but the one before which is what I want since it starts from index[0]
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Finder Keepers
function findElement(arr, func) {
  // Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
  //1st try
  // let num = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
      // num = arr[i]
    }
  }
  // } return num
}
// Easier method is using .find() which is a method that returns the first emlement in an array that satisfies a testing function, so it would look something like this:
// return arr.find(func)
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
