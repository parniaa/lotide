// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${actual}`);
  }
};
  const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  };
  // TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); 