const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(inputObject, inputValue){

};

const findKeyByValue = function(inputObject, inputFunction) {
  for (const input in inputObject) {
    const element = inputObject[input];
    if (element === inputFunction(2)) {
      return element;
      // result = Object.keys(inputObject);
      // console.log(result);
    }
    
  }
  return undefined;
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
