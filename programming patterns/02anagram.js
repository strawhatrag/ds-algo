function validAnagram(str1, str2) {
  // count each time a char occurs and compare with the other one

  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let key = str2[i];
    if (!lookup[key]) {
      return false;
    } else {
      lookup[key] -= 1;
    }
  }

  return true;
}
console.log(validAnagram("tadc", "cact"));
