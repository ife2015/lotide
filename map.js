const eqArrays = function(array1, array2) {
  const firstArray = array1.map((element, index) =>{
    return element === array2[index]; 
  }).every(element => element === true);
  return firstArray; 
}; 

const assertArraysEqual = function(array1, array2, callEqArray) {
  if (callEqArray(array1,array2)) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${array1} !== ${array2} `);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
 
  const results = []; 

  for(let item of array) {
    results.push(callback(item));
  }

 
  return results; 
}

//console.log(map(words, word => word[0]));

assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t'], eqArrays); 

