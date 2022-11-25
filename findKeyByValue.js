const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value){
  let firstFoundKey;

  return firstFoundKey;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);