const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(inputObject, inputValue) {
  for (const input in inputObject) {
    if (inputObject.hasOwnProperty(input)) {
      const element = inputObject[input];
      if (element === inputValue) {
        return input;
        // result = Object.keys(inputObject);
        // console.log(result);
      }
    }
  }
  return undefined;
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

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
