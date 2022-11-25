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

const letterPositions = function(sentence){
  
  const results = {};
  
  for (let index = 0; index < sentence.length; index++){
    
    if (sentence[index] === " "){
      continue;
    }

    if (results[sentence[index]]){

      results[sentence[index]].push(index);

    } else {

      results[sentence[index]] = [index];

    }

  }

  return results;
}

testString = "hello";
assertArraysEqual(letterPositions(testString).h, [0]);
assertArraysEqual(letterPositions(testString).e, [1]);
assertArraysEqual(letterPositions(testString).l, [2, 3]);
assertArraysEqual(letterPositions(testString).o, [4]);

testString = "ooga booga";
assertArraysEqual(letterPositions(testString).o, [0, 1, 6, 7]);
assertArraysEqual(letterPositions(testString).g, [2, 8]);
assertArraysEqual(letterPositions(testString).a, [3, 9]);
assertArraysEqual(letterPositions(testString).b, [5]);
