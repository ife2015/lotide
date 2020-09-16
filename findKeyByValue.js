const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const findKeyByValue = function(tvShows, value) {
  for (let genre in tvShows) {
    if (tvShows[genre] === value) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const result = findKeyByValue(bestTVShowsByGenre, `That70s Show`);
console.log(assertEqual(result,undefined));