const myReplace = require("./index");

test("myReplace function is defined.", () => {
  expect(myReplace).toBeDefined();
});

test("myReplace function should accept only three arguments.", () => {
  expect(myReplace("Let's listen to a song", "sing")).toBe(undefined);
  expect(myReplace("Let's listen to a song")).toBe(undefined);
  expect(myReplace()).toBe(undefined);
  expect(myReplace("Let's listen to a song", "song", "sing", "singing")).toBe(undefined);
});

test("the arguments passed to myReplace function are strings.", () => {
  expect(myReplace("Let's listen to a song", [], {})).toBe(undefined);
  expect(myReplace("Let's listen to a song", null, {})).toBe(undefined);
  expect(myReplace("Let's listen to a song", null, 12)).toBe(undefined);
});

test("myReplace('Let's listen to a song', 'listen', 'sing') returns a string.", () => {
  const result = myReplace("Let's listen to a song", "listen", "sing");
  expect(typeof result).toBe("string");
});

test("myReplace('Let's listen a song', 'listen', 'sing') returns 'Let's sing a song'.", () => {
  expect(myReplace("Let's listen a song", "listen", "sing")).toBe("Let's sing a song");
});

test("myReplace('She is Running in the park', 'Running', 'walking') returns 'She is Walking in the park'.", () => {
  expect(myReplace("She is Running in the park", "Running", "walking")).toBe("She is Walking in the park");
});

test("myReplace('My favourite color is purple', 'color', 'colour') returns 'My favourite colour is purple'.", () => {
  expect(myReplace("My favourite color is purple", "color", "colour")).toBe("My favourite colour is purple");
});

test("myReplace('His name is Bob', 'Bob', 'bruce') returns 'His name is Bruce'.", () => {
  expect(myReplace("His name is Bob", "Bob", "bruce")).toBe("His name is Bruce");
});
