const head = require('../head');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

// assertEqual(head([4, 5, 1]), 4);
// assertEqual(head([4, 5, 1]), 1);
// assertEqual(head(["LHL", "Bootcamp", "Web Dev FLEX"]), "LHL");
// assertEqual(head(["LHL", "Bootcamp", "Web Dev FLEX"]), "Bootcamp");
// assertEqual(head([1]), 1);
// assertEqual(head([]), undefined);
// assertEqual(head([1, 1, 1, 1]), 1);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});