
eqArrays([1, 2, 3], [3, 2, 1]); 

const eqArrays = function(array1, array2) {
  const firstArray = array1.every(number => typeof number === "number");
  const secondArray = array2.every(number => typeof number === "number");

  return firstArray === secondArray;
}; 

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
  }
};
