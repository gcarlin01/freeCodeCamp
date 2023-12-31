// Extend constructor to receive arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("noRayo", "brown");

// Verify an objects constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Only change code below this line
// this is to verify if an object is an actual instance of a constructor (true/false)
let myHouse = new House(3);
myHouse instanceof House; // this should return true

// Understand own property
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
// Adding all aown properties of canary to ownProps
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); // this will log [ 'name', 'numLegs' ]

// Use an IIFE to create a module
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
