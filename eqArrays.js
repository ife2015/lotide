const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const eqArrays = function(array1, array2) {
  const firstArray = array1.every(number => typeof number === "number");
  const secondArray = array2.every(number => typeof number === "number");

  return firstArray === secondArray;
}; 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); 
