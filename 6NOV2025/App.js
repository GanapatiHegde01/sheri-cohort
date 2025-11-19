// Rest parameters
function abc(...c) {
  console.log(c);
}

abc(1, 2, 3, 4, 5, 6);
// op - [1,2,3,4,5,6]

// Parameters in js - [required, destructured]
const obj1 = {
  name: "Ganapati",
  age: 12,
};

function abcd({ name, age }) {
  console.log(name);
  console.log(age);
}

abcd(obj1);

// -- Arguments in JavaScript - [`positional`, `default`, `spread`]

//  Scope chain
let a = 10; //Global Scope

function scopeChain() {
  let b = 13; // Outer Scope

  function nestFun() {
    //Inner Scope
    console.log(b);
  }
}

// Immediatlely Invoked Function Expression
(function () {
  console.log("Hello IIFE");
})();
7;

// Arrow function (Also called FAT arrow fun)
const test = () => {
  console.log("hello");
};

// Anonymous Fun
const anonymous = function () {
  console.log("Anonymous");
};

// Higher order function
function HighOrderFun(a) {
  a();
}

HighOrderFun(function () {
  console.log("Hello Am HigherOrderFun");
});
