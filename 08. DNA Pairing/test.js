const pairElement = require("./index");

test("pairElement function is defined.", () => {
  expect(pairElement).toBeDefined();
});

test("pairElement accepts only one argument.", () => {
  expect(pairElement("ATCGA", "A")).toBe(undefined);
});

test("pairElement('ATCGA') returns [['A','T'],['T','A'],['C','G'],['G','C'],['A','T']].", () => {
  expect(pairElement("ATCGA")).toStrictEqual([
    ["A", "T"],
    ["T", "A"],
    ["C", "G"],
    ["G", "C"],
    ["A", "T"],
  ]);
});

test("pairElement('TTGAG') returns [['T','A'],['T','A'],['G','C'],['A','T'],['G','C']].", () => {
  expect(pairElement("TTGAG")).toStrictEqual([
    ["T", "A"],
    ["T", "A"],
    ["G", "C"],
    ["A", "T"],
    ["G", "C"],
  ]);
});

test("pairElement('CTCTA') returns [['C','G'],['T','A'],['C','G'],['T','A'],['A','T']].", () => {
  expect(pairElement("CTCTA")).toStrictEqual([
    ["C", "G"],
    ["T", "A"],
    ["C", "G"],
    ["T", "A"],
    ["A", "T"],
  ]);
});
