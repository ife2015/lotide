const assert = require('chai').assert; 
const eqArrays = require(`../eqArrays`);

describe(`#eqArrays`, () => {
  it("returns true for [1,2,3] and [1,2,3]", () => {
    const expectedOutput = true;
    assert.strictEqual(eqArrays([1, 2, 3],[1, 2, 3]), expectedOutput);
  });

  it("returns false for [1,2,3] and [3,2,1]", () => {
    const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine",drama:"The Wire"};
    const expectedOutput = false;
    assert.strictEqual(eqArrays([1, 2, 3],[3, 2, 1]), expectedOutput);
  });

  it("returns true for [`1`,`2`,`3`] and [`1`,`2`,`3`]", () => {
    const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine",drama:"The Wire"};
    const expectedOutput = true;
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), expectedOutput);
  });

  it("returns false for [`1`,`2`,`3`] and [`1`,`2`,3]", () => {
    const expectedOutput = false;
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), expectedOutput);
  });

  it("returns true for [1,2,3] and [1,2,3]", () => {
    const expectedOutput = true;
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), expectedOutput);
  });

});


