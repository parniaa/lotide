const middle = require("../middle");
const assert = require("chai").assert;

console.log(middle([2,3,4,4]));
middle([1, 2]);

// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(middle(words), ["world"]);

describe("#middle", () => {
  it("returns middle index for odd array for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`returns two middle index for even array for ["hello", "world", "lighthouse"]`, () => {
    assert.deepEqual(middle(["hello", "world", "lighthouse","LHL"]), ["world", "lighthouse"]);
  });
  it(`returns []  for array with two index ["A","B"]`, () => {
    assert.deepEqual(middle(["A","B"]), []);
  });
});