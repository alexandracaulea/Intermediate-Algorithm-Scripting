function pairElement(str) {
  if (arguments.length !== 1) return;

  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  const arr = str.split("");
  return arr.map((el) => [el, pairs[el]]);
}

module.exports = pairElement;
