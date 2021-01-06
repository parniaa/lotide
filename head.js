// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(array) {
  return array[0];
};
  // TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]),);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
