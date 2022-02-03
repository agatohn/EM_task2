// Task 1
console.log("task 1");

function fiveLine(s) {
  return `
  ${s}
  ${s + s}
  ${s + s + s}
  ${s + s + s + s}
  ${s + s + s + s + s}`;
}
console.log(fiveLine("EM"));

// Task 2
console.log("task 2");

function stringToCodeDifference(s) {
  const codeArr = s
    .split("")
    .map((chart) => chart.charCodeAt())
    .join("")
    .split("");
  const total1 = codeArr.reduce(
    (prevValue, currValue) => Number(prevValue) + Number(currValue)
  );
  const total2 = codeArr.reduce((prevValue, currValue) => {
    if (currValue === "7") {
      return Number(prevValue) + 1;
    } else {
      return Number(prevValue) + Number(currValue);
    }
  });
  return total1 - total2;
}
console.log(stringToCodeDifference("EvenMore"));

// Task 3
console.log("task 3");

function alienLanguage(s) {
  return s
    .split(" ")
    .map(
      (word) =>
        word.substring(0, word.length - 1).toUpperCase() +
        word.substring(word.length - 1)
    )
    .join(" ");
}
console.log(alienLanguage("Even More"));

// Task 4
console.log("task 4");

function automorphic(n) {
  let sqr = n * n;
  while (n >= 1) {
    if (n % 10 != sqr % 10) {
      return "Not Automorphic";
    }
    n /= 10;
    sqr /= 10;
  }
  return "Automorphic";
}
console.log(automorphic(25));

// Task 5
console.log("task 5");

Function.prototype.callPolyfill = function (thisArg, ...args) {
  this.apply(thisArg, [...args]);
};

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.callPolyfill(this, name, price);
  this.category = "еда";
}

var cheese = new Food("фета", 5);
console.log(cheese);

// Task 6
console.log("task 6");

// Simple .bind
// Function.prototype.bindPolyfill = function (obj) {
//   let f = this;
//   return function () {
//     return f.apply(obj);
//   };
// };
Function.prototype.bindPolyfill = function (obj) {
  var currentFunc = this;

  if (!currentFunc.rootFunc) {
    innerFunc.rootFunc = currentFunc;
  } else {
    innerFunc.rootFunc = currentFunc.rootFunc;
  }

  function innerFunc() {
    if (currentFunc.rootFunc) {
      return currentFunc.rootFunc.call(obj);
    }
    return currentFunc.call(obj);
  }

  return innerFunc;
};

var func = function () {
  return this.prop;
};
const obj1 = { prop: 1 };
const obj2 = { prop: 2 };
const obj3 = { prop: 3 };
func = func.bindPolyfill(obj1);
console.log(func()); // Will produce 1
func = func.bindPolyfill(obj2);
console.log(func()); // Will also produce 1 :(
func = func.bindPolyfill(obj3);
console.log(func()); // Will also produce 1 :(

// Task 7
console.log("task 7");

var greet_abe = function () {
  var name = "Abe";
  return "Hello, " + name + "!";
};

var greet_ben = function () {
  name = "Ben";
  return "Hello, " + name + "!";
};

console.log(greet_abe());
console.log(greet_ben());
