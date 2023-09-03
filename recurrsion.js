function findFactorialRecursive(n) {
  if (n === 2) {
    return 2;
  }
  return n * findFactorialRecursive(n - 1);
}
