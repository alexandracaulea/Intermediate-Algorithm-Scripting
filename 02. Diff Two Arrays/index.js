function diffArray(arr1, arr2) {
  if (arguments.length !== 2) return;
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return;
  } else {
    return arr1.concat(arr2).filter((elem) => {
      return !arr1.includes(elem) || !arr2.includes(elem);
    });
  }
}

module.exports = diffArray;
