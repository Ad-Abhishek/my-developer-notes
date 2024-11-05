1. Arrow Function:
-------------------
function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

console.log(add(2, 3));

Key Points:
- Arrow functions do not have their own this; they inherit it from the outer scope.
- They are best suited for non-method functions. Avoid using them as object methods if this is needed.

Example (Lexical this):

function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds); // Arrow function uses `this` from Timer
  }, 1000);
}


---------------------------------------

2. Callback Functions
---------------------
A callback function is a function passed as an argument to another function, often
for asynchronous operations (like API requests or setTimeout).

Array Processor with a Callback:

function arrayProcessor(numbers, callback) {
  const results = [];

  for (let number of numbers) {
    results.push(callback(number));
  }
  return results;
}

function square(num) {
  return num * num;
}

const array = [1, 2, 3, 4, 5];
console.log(arrayProcessor(array, square));

--------------------------------------------------------------------

3. Anonymous Function:
const nums = [1, 2, 3, 4];

const doubleNums = nums.map(num => num * 2);

const doubleNums = nums.map(function (num) {
  return num * 2;
});

console.log(doubleNums);


Immediately Invoked Function Expressions (IIFE)
---------------------------------------
(function () {
  console.log('HELLO');
})();

---------------------------------------------------------------
4. Higher Order Functions:
 A higher-order function is a function that accepts another function as an argument or returns a function.
 Examples: .map(), .filter(), .reduce()
 
 