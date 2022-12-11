# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mediumchailatte2sugars/lotide`

**Require it:**

`const _ = require('@mediumchailatte2sugars/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Given two arrays, logs whether the two arrays are equal or not (used for simple testing)
* `assertEqual(any, any)`: Given two items, logs whether they are equal or not (used for simple testing of primitives) 
* `assertObjectsEqual(object1, object2)`: Given two objects, logs whether they are equal or not (used for simple testing)
* `countLetters(string)`: Returns a count of each of the letters contained in a string
* `countOnly(array, object)`: Given an list of items, and an object specifying the items to count (keys with a bool value true), returns an object showing the results of the count
* `eqArrays(array1, array2)`: Given two arrays, returns true if they are equal, false otherwise
* `eqObjects(object1, object2)`: Given two objects, returns true if they are equal, false otherwise
* `findKey(object, callback)`: Given an object and a callback function, returns the first key contained in the object that makes the callback function truthy
* `findKeyByValue(object, value)`: Given an object and a value, returns the first key with the specified value
* `flatten(array)`: Given a nested array (1 level), returns a flattened array 
* `head(array)`: Given an array, returns the first item
* `letterPositions(string)`: Given a string, returns the positions of each letter in the string in an object where they keys are the letters, and the values are arrays of the indicies of each letter position
* `map(array, callback)`: Given an array and callback function, returns a new array with the callback function applied to each item in the given array
* `middle(array)`: Given an array, returns an array of the middle items in the array (middle array length of 1 for odd sized arrays, 2 for even)
* `tail(array)`: Given an array, returns a copy of the array without the first element
* `takeUntil(array, callback)`: Given an array and callback function, returns an array of the elements up until the first element that makes the callback function truthy
* `without(sourceArray, itemsToRemoveArray)`: Given two arrays: the first being the source array, the second containing the items to be removed from the first, returns a new array with the specified elements removed from the first array.