const assert = require('chai').assert; 
const eqObjects = require('../eqObjects.js'); 

describe(`#eqObjects`, () => {
  it("returns true for same keys in same objects", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const expectedOutput = true; 
    assert.strictEqual(eqObjects(ab,ba), expectedOutput);
  });

  it("returns false for two different objeects", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const expectedOutput = false;
    assert.strictEqual(eqObjects(ab,abc), expectedOutput);
  });

  it("returns true for array values for same object", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const expectedOutput = true;
    assert.strictEqual(eqObjects(cd,dc), expectedOutput);
  });

  it("returns false for array values of different objects", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const expectedOutput = false;
    assert.strictEqual(eqObjects(cd,cd2), expectedOutput); 
  });
});
