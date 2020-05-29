function steamrollArray(arr) {
  if (arguments.length !== 1) return;

  if (!Array.isArray(arr)) return;

  const flatArr = [].concat(...arr);
  return flatArr.some(Array.isArray) ? steamrollArray(flatArr) : flatArr;
}

module.exports = steamrollArray;
