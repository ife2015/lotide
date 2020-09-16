const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  const nospaceSentence = sentence.split(" ").join("");

  for(let index in nospaceSentence) {
    if(results.hasOwnProperty(nospaceSentence[index])) {
      results[nospaceSentence[index]].push(index);
    } else {
      results[nospaceSentence[index]] = [index];
    }
  }
  return results; 
  }



console.log(letterPositions("lighthouse in the house"));