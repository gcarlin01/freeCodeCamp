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
