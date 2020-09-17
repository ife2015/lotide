const eqObjects = function(object1, object2) {
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


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} `);
  }
};

assertObjectsEqual({ c: "1", d: ["2", 3,4] }, { c: "1", d: ["2", 3, 4] });
assertObjectsEqual({ a: "1", b: "2" },{ b: "2", a: "1" });