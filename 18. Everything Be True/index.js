function truthCheck(collection, pre) {
  if (arguments.length !== 2) return;

  if (!Array.isArray(collection) || typeof pre !== "string") return;

  return collection.every((obj) => obj[pre]);
}

module.exports = truthCheck;
