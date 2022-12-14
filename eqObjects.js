const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅💃Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑🕵️‍♀️Assertion Failed: ${actual} !== ${expected}`);
};

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

const eqObjects = function(object1, object2) {

  // Checks if objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length || Object.values(object1).length !== Object.values(object2).length) {
    return false;
  }

  for (let index = 0; index < Object.keys(object1).length; index++) {

    let object1KeyAtIndex = Object.keys(object1)[index], object2KeyAtIndex = Object.keys(object2)[index];

    // Check to see if the keys are the same
    if (object1KeyAtIndex !== object2KeyAtIndex) {
      return false;
    }

    // Check to see if the values are the same (Arrays)
    if (Array.isArray(object1[object1KeyAtIndex]) && Array.isArray(object2[object2KeyAtIndex])) {
      return eqArrays(object1[object1KeyAtIndex], object2[object2KeyAtIndex])
    }

    // Check to see if the values are the same (primitives)
    if (object1[object1KeyAtIndex] !== object2[object2KeyAtIndex]) {
      return false;
    }

  }

  return true;


};

// Tests for prim's
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

// non prim's test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

assertEqual(cd.c, dc.c);
assertEqual(cd.d, dc.d);
assertEqual(Object.keys(cd).length, Object.keys(dc).length);


const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(cd.c, cd2.c);
assertEqual(cd.d, cd2.d);
assertEqual(Object.keys(cd).length, Object.keys(cd2).length);

module.exports = eqObjects;