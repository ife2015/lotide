const eqArrays = function(array1, array2) {

  const firstArray = array1.map((element, index) =>{
    return element === array2[index]; 
  }).every(element => element === true);

  return firstArray;
}; 

module.exports = eqArrays; 




