const prompt = require("prompt-sync")();
const input = prompt("enter fib number :");

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibFaster() {
  let cache = {};

  return function fib(n) {
    if (n < 2) return n;

    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const calculateFib = fibFaster();
console.log(calculateFib(input));
