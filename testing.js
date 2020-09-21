// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
//   } else {
//     console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
//   }
// };

// const eqArrays = function(array1, array2) {

//   const firstArray = array1.map((element, index) =>{
//     return element === array2[index]; 
//   }).every(element => element === true);

//   return firstArray;

// }; 

//eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true

const arrayOne = [[2, 3], [4],5]; 
const arrayTwo = [[2, 3], [4]]; 

const equalArray = function (array, array2) {
let empty = [];
let empty2 = []; 

array.forEach((element) => {
  if(Array.isArray(element)) {  
    empty.push(...equalArray(element)); 
  } else {
    empty.push(element);
  }
}); 


}

console.log(equalArray(arrayOne)); 