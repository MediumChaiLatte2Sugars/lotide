const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 4 for [4, 5, 1]", () => {
    assert.strictEqual(head([4, 5, 1]), 4); 
  });

  it("returns 'LHL' for ['LHL', 'Bootcamp', 'Web Dev FLEX']", () => {
    assert.strictEqual(head(["LHL", "Bootcamp", "Web Dev FLEX"]), "LHL"); 
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

  it("returns 1 for [1, 1, 1, 1]", () => {
    assert.strictEqual(head([1, 1, 1, 1]), 1); 
  });
});