const eqArrays = require(`./eqArrays`); 

const assertArraysEqual = function(array1, array2, callEqArray) {
  if (callEqArray(array1,array2)) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${array1} !== ${array2} `);
  }
};

const map = function(array, callback) {
 
  const results = []; 

  for(let item of array) {
    results.push(callback(item));
  }

 
  return results; 
}

//console.log(map(words, word => word[0]));
// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t'], eqArrays); 
module.exports = map;
