const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("LightHouse Labs", "Bootcamp");
assertEqual("LightHouse Labs", "LightHouse Labs");
assertEqual(1, 1);
assertEqual(1, 4);
assertEqual(" ", "");
assertEqual(NaN, undefined);
assertEqual(NaN, 2);

