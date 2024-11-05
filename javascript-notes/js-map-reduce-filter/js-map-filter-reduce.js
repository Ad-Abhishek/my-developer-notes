let arr = [10, 2, 3, 4, 56, 5];

function evenCount(arr) {
  return arr.filter((a) => a % 2 === 0).length;
}

console.log(evenCount(arr));

function squareAll(num) {
  return num.map((n) => n * n);
}

console.log(squareAll(arr));

function sum(num) {
  return num.reduce((a, c) => a + c, 0);
}

console.log('sum ', sum(arr));