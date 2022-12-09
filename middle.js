
const pushToArray = function(ogArray, midArray, indices) {

  for (let number of indices) {
    midArray.push(ogArray[number]);
  }

  return midArray;
};

const middle = function(sourceArray) {
  let middleArray = [];

  if (!sourceArray.length) {
    return middleArray;
  }

  switch (sourceArray.length % 2) {

  case 0:
    return pushToArray(sourceArray, middleArray, [(sourceArray.length / 2) - 1, sourceArray.length / 2]);

  case 1:
    return pushToArray(sourceArray, middleArray, [Math.floor(sourceArray.length / 2)]);

  default:
    break;
  }

  return middleArray;
};

module.exports = middle;