const countOnly = require("../countOnly");
const assert = require("chai").assert;
describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false
  });
  it(`returns{"Jason": 1, "Fang": 2} for {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false
  }`, () => {
    assert.deepEqual(result1, 
      {
        "Jason": 1, 
        "Fang": 2
      });
  });
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
