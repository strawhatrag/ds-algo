function findFactorialRecursive(n) {
  if (n === 2) {
    return 2;
  }
  return n * findFactorialRecursive(n - 1);
}

function fibonacciRecursive(n) {
  while (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciIterative(n - 2);
}

console.log(fibonacciRecursive(10));

//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursive(str) {
  if (str === "") {
    return str;
  }
  console.log(str.substr(1) + str[0]);
  return reverseStringRecursive(str.substr(1)) + str[0];
}

console.log(reverseStringRecursive("yoyo mastery")); // 'yretsam oyoy'
