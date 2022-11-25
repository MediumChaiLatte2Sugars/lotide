const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length || Object.values(object1).length !== Object.values(object2).length) {
    return false;
  }

  for (let index = 0; index < Object.keys(object1).length; index++) {

    // Check to see if the keys are the same
    if (Object.keys(object1)[index] !== Object.keys(object2)[index]) {
      return false;
    }

    // Check to see if the values are the same
    if (object1[Object.keys(object1)[index]] !== object2[Object.keys(object2)[index]]) {
      return false;
    }

  }

  return true;


};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

assertEqual(ab.a, ba.a);
assertEqual(ab.b, ba.b);
assertEqual(Object.keys(ab).length, Object.keys(ba).length);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(abc.a, ab.a);
assertEqual(abc.b, ab.b);
assertEqual(abc.c, ab.c);
assertEqual(Object.keys(abc).length, Object.keys(ab).length);
