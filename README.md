# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ife2020/lotide`

**Require it:**

`const _ = require('@ife2020/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

* `head(arr)`: description - retrieves the first element from an array. 
* `tail(arr)`: description - retrieves the entire array except for the first item/element. 
* `middle(arr)`: description - retrieves the middle elements within the array to return them in array. 
* `without(source, itemToRemove)`: description - removes items from the source array provided an array of items to remove. 
* `takeUntil(arr, callback)`: description - returns a slice of the array with elements taken from the beginning up until the results of the callback function. 
* `map(array, callback)`: description - returns a new array based on teh results of the callback function. 
* `letterPositions(string)`: description - takes in sentence (as a string) and returns all the indices (zero-based positions) in the string where each character is found. 
* `findKeyByValue(obj, value)`: description - takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined. 
* `findKey(obj)`: description - scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
* `countLetters(string)`: description - takes in sentence (as a string) and returns a count of each of the letters in that sentence. 
* `countOnly(arr, obj)`: description - takes in a collection of items (array) and returns counts for a specific subset of those items based  on the object. 
* `eqObjects(obj1, obj2)`: description - compares to objects for a perfect match.
* `assertEqual(actual, expected)`: description - compares identical and non-identical strings or numbers (primitive data only).  
* `eqArrays(arr1, arr2)`: description - compares two arrays for a perfect match.
* `assertArraysEqual(actual, expected)`: description - provides a console log message of whether or not both arrays match the expected output.
* `assertObjectsEqual(actual, expected)`: description - provides a console log message of whether or not both objects match the expected output.

