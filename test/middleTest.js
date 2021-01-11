const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
console.log(middle([2,3,4,4]));
middle([1, 2]);

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(words), ["world"]);