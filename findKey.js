const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

};

let testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
assertEqual(findKey(testObject, x => x.stars === 2), "noma");

testObject = {
  dish1: "Eggs Benny",
  dish2: "Steak Frites",
  dish3: "Pain Perdu",
  dish4: "Chartreuse Eggs and Spam",
  dish5: "Butter Chicken",
  dish7: ["Salmon Poke Bowl", "Coconut Fritters"],
};

assertEqual(findKey(testObject, x => Array.isArray(x) && x.length > 1), "dish7");
