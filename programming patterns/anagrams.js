function validAnagram(str1, str2) {
  // count each time a char occurs and compare with the other one

  if (str1.length !== str2.length) {
    return false;
  }

  let charMap1 = {};
  let charMap2 = {};

  for (let char of str1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (let char of str2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  for (let key in charMap1) {
    if (!(key in charMap2)) {
      console.log(key);
      return false;
    }
    if (charMap1[key] !== charMap2[key]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram("tact", "cacc"));
