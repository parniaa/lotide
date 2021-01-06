const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(inputSentence) {
  const results = {};
  let arraySentence = inputSentence.split('');
  for (const arrayS of arraySentence) {
    if (arrayS !== " ") {
      if (results[arrayS]) {
        results[arrayS] += 1;
      } else {
        results[arrayS] = 1;
        // this is similar to line above    result = { `${item}`: 1}
      }
    }
  }
  return results;
};
const test = countLetters("hello cuti klloo");
assertEqual(test["l"],4);