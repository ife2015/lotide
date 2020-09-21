const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions'); 
const findKeyByValue = require('./findKeyByValue')
const findKey = require('./findKey');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly'); 
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual'); 
const eqArrays = require('./eqArrays');
const assertArraysEqual = require(`./assertArraysEqual`);

module.exports = {head, tail, middle, without, takeUntil, map, letterPositions, findKeyByValue, 
  findKey, countLetters, countOnly, eqObjects, eqArrays, assertEqual, assertArraysEqual};