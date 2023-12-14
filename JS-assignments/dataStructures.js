// Using an array to store collection of data
let yourArray = ["hello", 1, true, "there", 2, false];
console.log(yourArray.length); // Change this line

// Access an arrays content using bracket notation
// let myArray = ["a", "b", "c", "d"];
// console.log(myArray);
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "GC";
// Only change code above this line
console.log(myArray);

// Add items to an array with push and unshift
//function mixedNumbers(arr) {
//  return arr;
//}
//console.log(mixedNumbers(['IV', 5, 'six']));
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // Only change code above this line
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));

// Remove items form an array with pop and shift
// function popShift(arr) {
//   let popped; // Change this line
//   let shifted; // Change this line
//   return [shifted, popped];
// }
// console.log(popShift(['challenge', 'is', 'not', 'complete']));
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));

// Remove items with splice
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// console.log(arr);
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.shift();
arr.splice(3, 4);
// Only change code above this line
console.log(arr);

// Add items with splice
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// Copy array items using slice
function forecast(arr) {
  // Only change code below this line
  let warmSunny = arr.slice(2, 4);
  return warmSunny;
}
// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// Copy an array with spread operator
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }
// console.log(copyMachine([true, false, true], 2));
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Or we can do a for loop like this:
    //for(let i = num; i > 0; i--){
    //newArr.push([...arr]);
    //}
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Combine arrays with spread operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}
console.log(spreadOut());

// Check for presence of an element with indexOf
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) !== -1) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// Iterate through all an arrays item using for loops
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// 5 layer complex multidimensional arrays
let myNestedArray = [
  // Only change code below this line
  [["deep", ["deeper", ["deepest"]]]],

  // Only change code above this line
];
console.log(myNestedArray);
