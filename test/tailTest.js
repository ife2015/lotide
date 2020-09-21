const assert = require('chai').assert; 
const tail = require('../tail.js');

describe(`#tail()`, () => {
  it(`should return [2,3] for [1,2,3]`, () => {
    assert.deepEqual(tail([1,2,3]),[2,3]); 
  });
  it(`should return [2,3,4,5,6,7,8] for [1,2,3,4,5,6,7,8]`, () => {
    assert.deepEqual(tail([1,2,3,4,5,6,7,8]),[2,3,4,5,6,7,8]); 
  });
  it(`should return [2] for [1,2]`, () => {
    assert.deepEqual(tail([1,2]),[2]); 
  });
});
