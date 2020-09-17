const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const eqObjects = function (object1, object2) {
  const emptArray = [];


  for (let char in object2) {
    if (Array.isArray(object2[char]) === false) {
      if (object2[char] === object1[char]) {
        emptArray.push(true);
      } else {
        emptArray.push(false);
      }
    } else {
      const firstArray = object2[char].map((element, index) => {
        return element === object1[char][index];
      }).every(element => element === true);
      emptArray.push(firstArray);
   }
  }
  return emptArray.every(element => element === true);
};


const result = eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });
assertEqual(result,false);