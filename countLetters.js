const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sourceString) {
  letterCount = {};

  for (let letter of sourceString) {

    if (letter === " "){
      continue;
    }

    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }

  }

  return letterCount;
};

let testString = "JHGL";
let testCounter = countLetters(testString);
assertEqual(testCounter.J, 1);
assertEqual(testCounter.H, 1);
assertEqual(testCounter.G, 1);
assertEqual(testCounter.L, 1);

testString = "JHLGL";
testCounter = countLetters(testString);
assertEqual(testCounter.J, 1);
assertEqual(testCounter.H, 1);
assertEqual(testCounter.G, 1);
assertEqual(testCounter.L, 2);

testString = "JHAAAALGL";
testCounter = countLetters(testString);
assertEqual(testCounter.J, 1);
assertEqual(testCounter.H, 1);
assertEqual(testCounter.G, 1);
assertEqual(testCounter.L, 2);
assertEqual(testCounter.A, 4);

module.exports = countLetters;