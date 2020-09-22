const assert = require('chai').assert; 
const countOnly = require('../countOnly.js'); 

describe(`#countOnly`, () => {
  it("returns 1 for Jason in the array ", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const nameCategories = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }; 
    const expectedOutput = 1;
    const userInput = countOnly(firstNames,nameCategories); 
    assert.strictEqual(userInput["Jason"], expectedOutput);
  });

  it("returns undefined for Karima in the array", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const nameCategories = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }; 
    const expectedOutput = undefined;
    const userInput = countOnly(firstNames,nameCategories); 
    assert.strictEqual(userInput["Karima"], expectedOutput); 
  });

  it("returns 2 for Fang in the array", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const nameCategories = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }; 
    const expectedOutput = 2; 
    const userInput = countOnly(firstNames,nameCategories); 
    assert.strictEqual(userInput["Fang"], expectedOutput);
  });

  it("returns undefined for Agouhanna in the array", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const nameCategories = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }; 
    const expectedOutput = undefined; 
    const userInput = countOnly(firstNames,nameCategories); 
    assert.strictEqual(userInput["Agouhanna"], expectedOutput);
  });
});
