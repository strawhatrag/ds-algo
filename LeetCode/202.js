/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function getNext(n) {
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  let slow = n;
  let fast = n;

  do {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  } while (slow !== fast && slow !== 1);

  return slow === 1;
};
