let arr1 = [1, 2, 3, 4];
let arr2 = [1, 4, 1, 9];

function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let present = arr2.indexOf(arr1[i] ** 2);

    console.log(present);
    if (present === -1) {
      return false;
    }

    arr2.splice(present, 1);
  }
  return true;
}

console.log(same(arr1, arr2));
