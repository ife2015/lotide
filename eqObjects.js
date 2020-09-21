
const assertEqual = require(`./assertEqual`); 


const eqObjects = function (object1, object2) {
  const emptArray = [];


  for (let dataType in object2) {
    if (Array.isArray(object2[dataType]) === false) {
      if (object2[dataType] === object1[dataType]) {
        emptArray.push(true);
      } else {
        emptArray.push(false);
      }
    } else {
      const firstArray = object2[dataType].map((element, index) => {
        return element === object1[dataType][index];
      }).every(element => element === true);
      emptArray.push(firstArray);
   }
  }
  return emptArray.every(element => element === true);
};

module.exports = eqObjects;

// const result = eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });
// assertEqual(result,false);

