function binaryAgent(str) {
  if (typeof str !== "string") return;

  const arr = str.split(" ");
  return arr.map((elem) => String.fromCharCode(parseInt(elem, 2))).join("");
}

module.exports = binaryAgent;
