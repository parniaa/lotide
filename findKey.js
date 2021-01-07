const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(inputObject, inputFunction) {
  let tempValue = "";
  for (const input in inputObject) {
    if (inputFunction(inputObject[input])) {
      tempValue = input;
      break;
    }
  }
  if (tempValue !== "") {
    console.log(tempValue);
  } else {
     console.log(undefined);
    }
};

const o1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
findKey(o1, x => x.stars === 5); // => "noma"
