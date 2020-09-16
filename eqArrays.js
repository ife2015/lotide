const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const eqArrays = function(array1, array2) {

  const firstArray = array1.map((element, index) =>{
    return element === array2[index]; 
  }).every(element => true);

  return firstArray;
}; 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); 


