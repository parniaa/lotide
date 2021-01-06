const eqArrays = function(a, b) {
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) return middleArray;
  else if (array.length % 2 === 0) {
    middleArray.push(array[(array.length / 2) - 1]);
    middleArray.push(array[(array.length / 2)]);
    return middleArray;
  } else {
    middleArray.push(array[Math.floor(array.length / 2)]);
    return middleArray;
  }
  
};
console.log(middle([2,3,4,4]));
middle([1, 2]);