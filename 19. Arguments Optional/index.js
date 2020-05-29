function addTogether() {
  const args = Array.from(arguments);

  if (args.length !== 1) {
    if (args.length !== 2) {
      return;
    }
  }

  const isNotANum = args.some((elem) => typeof elem !== "number");

  if (isNotANum) {
    return undefined;
  } else if (args.length > 1) {
    return args.reduce((total, currentVal) => (total += currentVal), 0);
  } else {
    return function (num) {
      return typeof num === "number" ? num + args[0] : undefined;
    };
  }
}

module.exports = addTogether;
