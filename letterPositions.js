const assertEqual = require(`./assertEqual`); 

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



// console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;