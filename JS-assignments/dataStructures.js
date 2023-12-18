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

// Add key value pairs to JS objects
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};
// 3 ways to add data (keys and values) to an object (collection)
// Only change code below this line
//1st
foods.bananas = 13;
//2nd, used when the identifier key contains spaces (not in this case)
foods["grapes"] = 35;
//3rd
const redFruit = "strawberries";
foods[redFruit] = 27;
// Only change code above this line
console.log(foods);

// Modify an object nested within an object
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};
// Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.
// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line
console.log(userActivity);

// Access property names with bracket notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
// We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.
function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}
console.log(checkInventory("apples"));

// Use the delete keyword to remove object properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
// Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object
// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
console.log(foods);

// Check if an object has a property
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
// Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
function isEveryoneHere(userObj) {
  // Only change code below this line
  return (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  );
  // Only change code above this line
}
console.log(isEveryoneHere(users));

// Iterate through the keys of an object with a for-in-statement
const usersTwo = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};
// Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true
function countOnline(allUsers) {
  // Only change code below this line
  let counter = 0;
  for (const status in allUsers) {
    // console.log(allUsers[status].online == true)
    if (allUsers[status].online == true) {
      counter++;
    }
  }
  return counter;
  // Only change code above this line
}
console.log(countOnline(usersTwo));

//Generare an array of all object keys with object keys
let usersThree = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
// Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}
console.log(getArrayOfUsers(usersThree));

// Modify an array stored in an object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};
// The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}
console.log(addFriend(user, "Pete"));
