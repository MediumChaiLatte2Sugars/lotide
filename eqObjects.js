const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2){

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

assertEqual(ab.a, ba.a);
assertEqual(ab.b, ba.b);
assertEqual(ab.keys().length, ba.keys().length);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(abc.a, ab.a);
assertEqual(abc.b, ab.b);
assertEqual(abc.c, ab.c);
assertEqual(abc.keys().length, ab.keys().length);
