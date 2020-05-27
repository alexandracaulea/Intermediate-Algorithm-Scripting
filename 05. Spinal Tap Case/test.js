const spinalCase = require("./index");

test("spinalCase function is defined.", () => {
  expect(typeof spinalCase).toEqual("function");
});

test("spinalCase accepts only one argument.", () => {
  expect(spinalCase("ThisIs", 10)).toBe(undefined);
});

test("the argument passed to spinalCase function is a string.", () => {
  expect(spinalCase(10)).toBe(undefined);
  expect(spinalCase([10])).toBe(undefined);
});

test("spinalCase('ThisIs') returns a string.", () => {
  const result = spinalCase("ThisIs");
  expect(typeof result).toBe("string");
});

test("spinalCase('Spinal Tap Case') returns 'spinal-tap-case'.", () => {
  expect(spinalCase("Spinal Tap Case")).toBe("spinal-tap-case");
});

test("spinalCase('spinalTapCase') returns 'spinal-tap-case'.", () => {
  expect(spinalCase("spinalTapCase")).toBe("spinal-tap-case");
});

test("spinalCase('Spinal_Tap_Case') returns 'spinal-tap-case'.", () => {
  expect(spinalCase("Spinal_Tap_Case")).toBe("spinal-tap-case");
});

test("spinalCase('This is Spinal Tap-Case') returns 'this-is-spinal-tap-case'.", () => {
  expect(spinalCase("This is Spinal Tap-Case")).toBe("this-is-spinal-tap-case");
});

test("spinalCase('ThisIs-Spinal tap-Case') returns 'this-is-spinal-tap-case'.", () => {
  expect(spinalCase("ThisIs-Spinal tap-Case")).toEqual("this-is-spinal-tap-case");
});
