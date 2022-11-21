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

const pushToArray = function(ogArray, midArray, indices){
  for (let number of indices){
    midArray.push(ogArray[number]);
  }

  return midArray;
}

const assertArraysEqual = function(array1, array2) {
  (eqArrays(array1, array2)) ? console.log(`✅✅✅💃Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${array1} !== ${array2}`);
};

const middle = function(sourceArray){
  let middleArray = [];

  switch (sourceArray.length % 2){

    case 0:
      return pushToArray(sourceArray, middleArray, [(sourceArray.length / 2) - 1, sourceArray.length / 2]);
      
    case 1:
      return pushToArray(sourceArray, middleArray, [Math.floor(sourceArray.length / 2)]);

    default:
      break;
  }

  return middleArray;
};

let testArray1 = [1, 2, 3, 4, 5];
assertArraysEqual(middle(testArray1), [3]);

testArray1 = [1, 2, 4, 5];
assertArraysEqual(middle(testArray1), [2, 4]);

testArray1 = [1];
assertArraysEqual(middle(testArray1), [1]);

testArray1 = [];
assertArraysEqual(middle(testArray1), []);