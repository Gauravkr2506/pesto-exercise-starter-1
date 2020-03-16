const arrayCubeRootToJson = arr => {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  if (arr.some(val => isNaN(val))) throw new Error("Wrong data in array");

  return arr.reduce((acc, num) => ({
    ...acc,
    [num.toString()]: Math.cbrt(num)
  }), {});
};

module.exports = {
  arrayCubeRootToJson
};