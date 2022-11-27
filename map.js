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

const assertArraysEqual = function(array1, array2) {
  (eqArrays(array1, array2)) ? console.log(`✅✅✅💃Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${array1} !== ${array2}`);
};

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

let testArray = [1, 2, 3, 4];
let changedArray = map(testArray, number => number ** 2);
assertArraysEqual(changedArray, [1, 4, 9, 16]);

testArray = [1, 2, 3, 4];
changedArray = map(testArray, number => number.toString());
assertArraysEqual(changedArray, ["1", "2", "3", "4"]);

testArray = ["a", "b", "c"];
changedArray = map(testArray, letter => letter.toUpperCase());
assertArraysEqual(changedArray, ["A", "B", "C"]);