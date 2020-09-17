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

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {

  // for(let index=0; index < array.length; index++) {
  //   if(callback(array[index])) {
  //     return array.slice(0,index);
  //   }
  // }

  const indexFinder = array.findIndex(callback); 
  return array.slice(0,indexFinder);

}



const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ], eqArrays); 