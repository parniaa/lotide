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

//Another Solution=====>
// const findKeyByValue = function(inputObject, inputValue) {
//   let objectKeys = Object.keys(inputObject);
//   for (const objectK of objectKeys) {
//     console.log(inputObject[objectK], inputValue);
//     if (inputObject[objectK] === inputValue) {
//       return objectK;
//     }
//   }
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// console.log(assertEqual(eqObjects(ab, ba), undefined));

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true


// assertEqual(eqObjects(cd, dc), false);
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

