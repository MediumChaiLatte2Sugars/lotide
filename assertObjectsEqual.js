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

const eqObjects = function(object1, object2) {

  // Checks if objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length || Object.values(object1).length !== Object.values(object2).length) {
    return false;
  }

  for (let index = 0; index < Object.keys(object1).length; index++) {

    let object1KeyAtIndex = Object.keys(object1)[index], object2KeyAtIndex = Object.keys(object2)[index];

    // Check to see if the keys are the same
    if (object1KeyAtIndex !== object2KeyAtIndex) {
      return false;
    }

    // Check to see if the values are the same (Arrays)
    if (Array.isArray(object1[object1KeyAtIndex]) && Array.isArray(object2[object2KeyAtIndex])) {
      return eqArrays(object1[object1KeyAtIndex], object2[object2KeyAtIndex]);
    }

    // Check to see if the values are the same (primitives)
    if (object1[object1KeyAtIndex] !== object2[object2KeyAtIndex]) {
      return false;
    }

  }

  return true;
};

const assertObjectsEqual = function(object1, object2) {

  const inspect = require('util').inspect;
  (eqObjects(object1, object2)) ? console.log(`✅✅✅💃Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);

};

let testObject = { 1: "one", 2: "two" }, testObject2 = { 1: "one", 2: "three" };
assertObjectsEqual(testObject, testObject2);

testObject = { 1: "one", 2: "two" }, testObject2 = { 1: "one", 2: "two" };
assertObjectsEqual(testObject, testObject2);