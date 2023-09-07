const nums = [99, 2, 33, 1, 0, 2, 4];

function mergeSort(array) {
  // base case recursion
  if (array.length === 1) {
    return array;
  }

  // Split Array into right and left
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  // Recursively sort and merge the left and right subarrays
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

console.log(mergeSort(nums));
