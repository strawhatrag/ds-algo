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
