const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it("returns [5, 1] for [4, 5, 1]", () => {
    assert.deepEqual(tail([4, 5, 1]), [5, 1]);
  });

  it('returns ["Bootcamp", "Web Dev FLEX"] for ["LHL", "Bootcamp", "Web Dev FLEX"]', () => {
    assert.deepEqual(tail(["LHL", "Bootcamp", "Web Dev FLEX"]), ["Bootcamp", "Web Dev FLEX"]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

});