const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(array) {
  return array[0];
};

assertEqual(head([4, 5, 1]), 4);
assertEqual(head([4, 5, 1]), 1);
assertEqual(head(["LHL", "Bootcamp", "Web Dev FLEX"]), "LHL");
assertEqual(head(["LHL", "Bootcamp", "Web Dev FLEX"]), "Bootcamp");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head([1, 1, 1, 1]), 1);
