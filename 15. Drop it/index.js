function dropElements(arr, func) {
  // check if dropElements function did not passed 2 arguments
  if (arguments.length !== 2) return;

  // check if "arr" is an array and "arr" is an array of numbers
  if (!Array.isArray(arr)) return;

  const isArrayOfNumbers = arr.every((elem) => typeof elem === "number");
  if (!isArrayOfNumbers) return;

  // check if "func" passed to dropElements is a function
  if (typeof func !== "function") return;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}

module.exports = dropElements;
