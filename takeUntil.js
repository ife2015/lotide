const eqArrays = require(`./eqArrays`); 

const assertArraysEqual = function(array1, array2, callEqArray) {
  if (callEqArray(array1,array2)) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${array1} !== ${array2} `);
  }
};

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {

  const indexFinder = array.findIndex(callback); 
  return array.slice(0,indexFinder);

}


// const results2 = takeUntil(data2, x => x === ',');

// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ], eqArrays); 

module.exports = takeUntil;