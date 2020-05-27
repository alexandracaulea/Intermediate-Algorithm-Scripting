function translatePigLatin(str) {
  if (arguments.length !== 1 || typeof str !== "string") return;

  let lowercaseStr = str.toLowerCase();
  const regex = /^[aeiou]/;
  if (lowercaseStr.match(regex)) {
    return lowercaseStr.concat("way");
  } else {
    let newStr = "";
    for (let i = 0; i < lowercaseStr.length; i++) {
      if (lowercaseStr[i].match(regex)) {
        return lowercaseStr.substr(i).concat(newStr, "ay");
      }
      newStr = newStr.concat(lowercaseStr[i]);
    }
    return newStr.concat("ay");
  }
}

module.exports = translatePigLatin;
