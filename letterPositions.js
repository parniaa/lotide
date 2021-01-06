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
const letterPositions = function(inputSentence) {
  const results = {};
  let arraySentence = inputSentence.split('');
  for (let i = 0; i < arraySentence.length; i++) {
    const arrayS = arraySentence[i];
    if (arrayS !== " ") {
      if (results[arrayS]) {
        results[arrayS].push(i);
      } else {
        results[arrayS] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("ppkkal"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);

