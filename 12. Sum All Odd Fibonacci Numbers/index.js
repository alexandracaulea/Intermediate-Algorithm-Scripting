function sumFibs(num) {
  if (arguments.length !== 1) return;

  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;

  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

module.exports = sumFibs;
