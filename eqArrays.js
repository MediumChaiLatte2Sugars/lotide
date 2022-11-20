const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

let testArray1 = [1, 3, 5], testArray2 = [2, 4, 5];
assertEqual(eqArrays(testArray1, testArray2), false);

testArray1 = [2, 4, 5], testArray2 = [2, 4, 5];
assertEqual(eqArrays(testArray1, testArray2), true);

testArray1 = [], testArray2 = [];
assertEqual(eqArrays(testArray1, testArray2), true);

testArray1 = [2, 4, 5, 6], testArray2 = [2, 4, 5];
assertEqual(eqArrays(testArray1, testArray2), false);