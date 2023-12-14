// Console.log()
let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);
let sumAB = a + b;
console.log(sumAB);

// Console.clear()
let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// Typeof to che type of a variable
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

// Escaping string by error (mixed usage of single and double quotes)
//let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
//console.log(innerHtml);
let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);

// Catch use of assignmentr operator instead of equality operator
//let x = 7;
//let y = 9;
//let result = "to come";
//if(x = y) {
//  result = "Equal!";
//} else {
//  result = "Not equal!";
//}
//console.log(result);
let x = 7;
let y = 9;
let result = "to come";
if (x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result);

// Missing open and closing parenthesis after function call
//function getNine() {
//  let x = 6;
//  let y = 3;
//  return x + y;
//}
//let result = getNine;
//console.log(result);
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let resultTwo = getNine();
console.log(resultTwo);

// Wrong args order
// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }
// let base = 2;
// let exp = 3;
// let power = raiseToPower(exp, base);
// console.log(power);
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

// Catching index errors
// function countToFive() {
//   let firstFive = "12345";
//   let len = firstFive.length;
//   // Only change code below this line
//   for (let i = 1; i <= len; i++) {
//   // Only change code above this line
//     console.log(firstFive[i]);
//   }
// }
// countToFive();
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}
countToFive();

// Use caution when reinitializing variables inside a loop
// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix);
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row = [];
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

// Prevent infinite loops
//function myFunc() {
//  for (let i = 1; i != 4; i += 2) {
//    console.log("Still going!");
//  }
//}
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
