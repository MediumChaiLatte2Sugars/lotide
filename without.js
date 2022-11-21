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

const without = function(sourceArray, itemsToRemove){
  let newArray = [];

  if (!itemsToRemove.length){
    return sourceArray;
  }

  for (let item of sourceArray){
    if (!itemsToRemove.includes(item)){
      newArray.push(item);
    }
  }

  return newArray;
}