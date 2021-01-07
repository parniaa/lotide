const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  // for (let i = 0; i < keys1.length; i++) {
  //   if (keys1[i] !== keys2[i]) return false;
  // }
  for (const key in object1) {
    if (!object2.hasOwnProperty(key)) return  false;
    if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (object1[key] !== object2[key]) return false;
    }
    if (!eqArrays(object1[key], object2[key])) return false;
  }

  
  return true;
};
const eqArrays = function(a, b) {
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};