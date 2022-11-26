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
      return eqArrays(object1[object1KeyAtIndex], object2[object2KeyAtIndex])
    }

    // Check to see if the values are the same (primitives)
    if (object1[object1KeyAtIndex] !== object2[object2KeyAtIndex]) {
      return false;
    }

  }

  return true;
}

const assertObjectsEqual = function(actual, expected){
  (eqArrays(actual, expected)) ?  console.log(`✅✅✅💃Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${array1} !== ${array2}`);
}