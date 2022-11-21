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

const flatten = function(sourceArray) {
  let newArray = [];

  for (let item of sourceArray) {

    if (Array.isArray(item)) {

      for (let element of item) {
        newArray.push(element);
      }
      continue;
    }
    newArray.push(item);
  }

  return newArray;
};

let testArray1 = [1, [2, 4, 5], 4, [3, 4]];
assertArraysEqual(flatten(testArray1), [1, 2, 4, 5, 4, 3, 4]);
