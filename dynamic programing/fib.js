// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
const prompt = require("prompt-sync")();
const input = prompt("enter fib number :");

console.log("your ans fib num is :" + fibonacci(input));
