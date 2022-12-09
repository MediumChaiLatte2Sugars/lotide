const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value){

  for (let key in object){
    
    if (object[key] === value){
      return key;
    }

  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

let vegetables = { 
  tuber: "Cassava",
  allium: "Onion",
  leafy:  "Lettuce"
};

assertEqual(findKeyByValue(vegetables, "Cassava"), "tuber");
assertEqual(findKeyByValue(vegetables, "Tomato"), undefined);

vegetables = { 
  tuber: "Cassava",
  tuber2: "Cassava",
  tuber3:  "Cassava"
};

assertEqual(findKeyByValue(vegetables, "Cassava"), "tuber");

vegetables = { 
  nottuber: "Eggplant",
  something: "Nothing",
  tuber: "Cassava",
  tuber2: "Cassava",
  tuber3:  "Cassava"
};

assertEqual(findKeyByValue(vegetables, "Cassava"), "tuber");

module.exports = findKeyByValue;