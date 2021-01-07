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
    console.log(`✅✅✅Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    if (item === "") {
      results.push("");
    } else {
      results.push(callback(item));
    }
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const word1 = ["", "c", "to", "mar", "pom"];
const results1 = map(word1, word => word[0]);
console.log(results1);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(word1, word => word[0]), [ '', 'c', 't', 'm', 'p' ]);
