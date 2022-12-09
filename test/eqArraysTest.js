const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

let testArray1 = [1, 3, 5], testArray2 = [2, 4, 5];
assertEqual(eqArrays(testArray1, testArray2), false);

testArray1 = [2, 4, 5], testArray2 = [2, 4, 5];
assertEqual(eqArrays(testArray1, testArray2), true);

testArray1 = [], testArray2 = [];
assertEqual(eqArrays(testArray1, testArray2), true);

testArray1 = [2, 4, 5, 6], testArray2 = [2, 4, 5];
assertEqual(eqArrays(testArray1, testArray2), false);