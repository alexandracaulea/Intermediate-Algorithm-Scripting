function spinalCase(str) {
  if (arguments.length !== 1 || typeof str !== "string") return;

  let lowercase = str.trim();
  let regEx = /\W+|(?=[A-Z])|_/g;
  let result = lowercase.split(regEx).join("-").toLowerCase();

  return result;
}

module.exports = spinalCase;
