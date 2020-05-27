function myReplace(str, before, after) {
  if (
    arguments.length !== 3 ||
    typeof arguments[0] !== "string" ||
    typeof arguments[1] !== "string" ||
    typeof arguments[2] !== "string"
  )
    return;

  const index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

module.exports = myReplace;
