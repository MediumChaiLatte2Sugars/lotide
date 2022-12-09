const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

let testArray1 = [1, 2, 3, 4, 5];
assertArraysEqual(middle(testArray1), [3]);

testArray1 = [1, 2, 4, 5];
assertArraysEqual(middle(testArray1), [2, 4]);

testArray1 = [1];
assertArraysEqual(middle(testArray1), [1]);

testArray1 = [];
assertArraysEqual(middle(testArray1), []);