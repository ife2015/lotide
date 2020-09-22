const assertEqual = require(`./assertEqual`); 

const findKeyByValue = function(tvShows, value) {
  for (let genre in tvShows) {
    if (tvShows[genre] === value) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;