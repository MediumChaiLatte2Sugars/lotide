
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 4] for [1, 2, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 4, 5]), [2, 4]);
  });

  it("returns [1] for [1]", () => {
    assert.deepEqual(middle([1]), [1]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});