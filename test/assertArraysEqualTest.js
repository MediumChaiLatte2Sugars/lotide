const assertArraysEqual = require('../assertArraysEqual');

let testArray1 = [1, 2, 3, 4];
let testArray2 = [2, 3, 5];
assertArraysEqual(testArray1, testArray2);

testArray1 = [];
testArray2 = [];
assertArraysEqual(testArray1, testArray2);

testArray1 = [1, 2, 3];
testArray2 = [];
assertArraysEqual(testArray1, testArray2);

testArray1 = [1, 2, 3];
testArray2 = [1, 2, 3];
assertArraysEqual(testArray1, testArray2);

testArray1 = [1, "2", 3];
testArray2 = [1, 2, 3];
assertArraysEqual(testArray1, testArray2);
