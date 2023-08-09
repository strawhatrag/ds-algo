function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp < max) {
      max = temp;
    }
  }

  return max;
}

console.log(maxSubarraySum([4, 2, 1, 6]), 1);
