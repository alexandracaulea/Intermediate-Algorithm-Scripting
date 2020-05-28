function uniteUnique(...arr) {
  if (arr.length < 2) return;

  const checkArgType = arr.every((arg) => Array.isArray(arg));
  if (!checkArgType) return;

  const newArr = [];
  const myArr = arr.flat();
  myArr.forEach((elem) => {
    if (newArr.includes(elem)) {
      return;
    } else {
      newArr.push(elem);
    }
  });
  return newArr;
}

module.exports = uniteUnique;
