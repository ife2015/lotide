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


const without = function(source, itemsToRemove) {
  return source.filter( (element,index) => {
    return element !== itemsToRemove[index]; 
  })
}


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);