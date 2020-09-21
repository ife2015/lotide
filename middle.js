'use strict'; 

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

module.exports = middle; 

