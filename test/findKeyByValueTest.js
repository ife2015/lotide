const assert = require('chai').assert; 
const findKeyByValue = require('../findKeyByValue.js'); 

describe(`#findKeyByValue`, () => {
  it("returns sci_fi for the`The Expanse`", () => {
    const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine",drama:"The Wire"};
    const expectedOutput = "sci_fi";
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The Expanse"), expectedOutput);
  });

  it("returns comedy for the `Brooklyn Nine-Nine`", () => {
    const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine",drama:"The Wire"};
    const expectedOutput = "comedy";
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"Brooklyn Nine-Nine"), expectedOutput);
  });


  it("returns drama for the`The Wire`", () => {
    const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine",drama:"The Wire"};
    const expectedOutput = "drama";
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The Wire"), expectedOutput);
  });

  it("returns undefined for `That 70s Show`", () => {
    const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine",drama:"The Wire"};
    const expectedOutput = undefined;
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"That 70s Show"), expectedOutput); 
  });
});
