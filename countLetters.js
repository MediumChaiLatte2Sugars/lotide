const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sourceString){
  letterCount = {};

  return letterCount;
};

let testString = "JHGL"
let testCounter = countLetters(testString);
assertEqual(testCounter.J, 1);
assertEqual(testCounter.H, 1);
assertEqual(testCounter.G, 1);
assertEqual(testCounter.L, 1);