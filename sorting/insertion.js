// sudo code
/*
for i from 1 to length(A) - 1:
  j = i
  while j > 0 and A[j - 1] > A[j]:
    swap A[j] and A[j - 1]
    j = j - 1
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const len = array.length;

  for (let i = 1; i < len; i++) {
    // Save the current element to be inserted
    const currentElement = array[i];
    let j = i;

    // Move elements to the left until the correct position is found
    while (j > 0 && currentElement < array[j - 1]) {
      array[j] = array[j - 1]; // Move the left element to the right
      j--;
    }

    // Insert the current element into its correct position
    array[j] = currentElement;
  }
}

insertionSort(numbers);
console.log(numbers);
