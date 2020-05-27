function fearNotLetter(str) {
  if (arguments.length !== 1 || typeof str !== "string") return;

  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let missingLetter = "";
  let strIndex = 0;
  let index = ALPHABET.indexOf(str[0]);
  let num = 0;

  for (let i = index; num <= str.length && i <= ALPHABET.length; i++) {
    num += 1;
    if (str[strIndex] === ALPHABET[i]) {
      strIndex += 1;
    } else {
      missingLetter = ALPHABET[i];
    }
    if (str === ALPHABET) return undefined;
  }
  return missingLetter;
}

module.exports = fearNotLetter;
