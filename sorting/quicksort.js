const nums = [99, 2, 33, 1, 0, 2, 4];

function quickSort(array, low, high) {
  if (low < high) {
    let s = low;
    let e = high;
    let m = Math.floor(s + (e - s) / 2);

    let pivot = array[m];

    while (s <= e) {
      while (array[s] < pivot) {
        s++;
      }
      while (array[e] > pivot) {
        e--;
      }
      if (s <= e) {
        [array[s], array[e]] = [array[e], array[s]];
        s++;
        e--;
      }
    }

    // Now pivot is in the right place; sort the other ends
    quickSort(array, low, e);
    quickSort(array, s, high);
  }
}

quickSort(nums, 0, nums.length - 1);
console.log(nums);
