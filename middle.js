'use strict'; 

const eqArrays = function(array1, array2) {
  const firstArray = array1.map((element, index) =>{
    return element === array2[index]; 
  }).every(element => element === true);
  return firstArray; 
}; 

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${array1} !== ${array2} `);
  }
};

const middle = function(arr) {
  // even
  if (arr.length % 2 === 0) {
    if (arr.length > 2) {
      const arrayMidpoint = arr.length/2; 
      return arr.slice(arrayMidpoint - 1, arrayMidpoint + 1); 
    } else {
      return []; 
    }
  } else {
    if (arr.length > 2) {
      const arrayMidpoint = (arr.length - 1)/2; 
      return arr.slice(arrayMidpoint, arrayMidpoint + 1); 
    } else {
      return []; 
    }
  }
}

assertArraysEqual(middle([1,2,3,4,5,6]), [3,4])