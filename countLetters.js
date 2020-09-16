const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const countLetter = function(str) {
  let letterList = {}; 

  for(let letter of str.split(" ").join("")) {
    if (letterList[letter]) {
       letterList[letter] += 1;
    } else {
      letterList[letter] = 1;
    }
  }
  return letterList;
}



let result = countLetter("lighthouse in the house");
console.log(assertEqual(result["o"], 2));