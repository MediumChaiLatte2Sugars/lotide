const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail([4, 5, 1]);
assertEqual(result[0], 5);
assertEqual(result.length, 2);
assertEqual(result[1], 1);

const result2 = tail(["LHL", "Bootcamp", "Web Dev FLEX"]);
assertEqual(result2[0], "Bootcamp");
assertEqual(result2.length, 2);
assertEqual(result2[1], "Web Dev FLEX");

const result3 = tail([]);
assertEqual(result3[0], undefined);

const result4 = tail([1]);
assertEqual(result4[0], undefined);
