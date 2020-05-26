function destroyer(arr) {
  if (!Array.isArray(arguments[0])) return;

  const args = Array.from(arguments).slice(1);
  return arr.filter((elem) => {
    return !args.includes(elem);
  });
}

module.exports = destroyer;
