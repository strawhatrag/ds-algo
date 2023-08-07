function countUniqueValues(arr) {
  if (arr.length == 0 || arr.length == 1) {
    return arr.length;
  }

  let i = 0;
  let unique = arr;
  // space o(n) , time o(n)
  for (let j = 1; j < unique.length; j++) {
    // 2 pointers- j travels & i is to mark
    // if j is not equal to i move up i
    // replace that i with j value
    // eventually u end up with uniques values in first half
    // [1,1,2,3,3,4,4] => [1, 2, 3, 4,3, 4, 4]
    if (unique[i] != unique[j]) {
      i++;
      unique[i] = unique[j];
      console.log(unique);
    }
  }

  return i + 1;
}

let arr = [1, 1, 2, 3, 3, 4, 4];
console.log(countUniqueValues(arr));
