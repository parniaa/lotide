const tail = require("../tail");
const assert = require("chai").assert;
// TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// // tail(words); // no need to capture the return value since we are not checking it
// assertEqual(tail(words).length, 3);


describe("#tail", () => {
  it("returns length of 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]).length, 3);
  });
  it("returns length of 0 for []", () => {
    assert.deepEqual(tail([]).length, 0);
  });
  it(`returns length of 1 for ["A"]`, () => {
    assert.deepEqual(tail(["A"]).length, 0);
  });
});