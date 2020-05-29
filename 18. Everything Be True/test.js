const truthCheck = require("./index");

test("truthCheck function should be defined", () => {
  expect(truthCheck).toBeDefined();
});

test("truthCheck function accepts only two arguments.", () => {
  expect(truthCheck([], [], {})).toBe(undefined);
});

test("the first argument passed to truthCheck is an array.", () => {
  expect(truthCheck(1, {})).toBe(undefined);
  expect(truthCheck({}, {})).toBe(undefined);
});

test("the second argument passed to truthCheck is a string.", () => {
  expect(truthCheck([{ user: "bob" }], 2)).toBe(undefined);
  expect(truthCheck([{ user: "carla" }], [1])).toBe(undefined);
});

test("truthCheck([{name: 'Bob'}, {'name: NaN}], 'name') returns false.", () => {
  expect(truthCheck([{ name: "Bob" }, { name: NaN }], "name")).toBeFalsy();
});

test("truthCheck([{ username: 'debb12' }, { username: undefined }], 'username') retuns false.", () => {
  expect(truthCheck([{ username: "debb12" }, { username: undefined }], "username")).toBeFalsy();
});

test("truthCheck([{ pasword: 'password' }], 'pasword') returns true.", () => {
  expect(truthCheck([{ pasword: "password" }], "pasword")).toBeTruthy();
});

test("truthCheck([{ name: 'Deborah', hasADog: true },{ name: 'Adriene', hasADog: true },{ name: 'Joey', hasADog: null },],'hasADog') returns false.", () => {
  expect(
    truthCheck(
      [
        { name: "Deborah", hasADog: true },
        { name: "Adriene", hasADog: true },
        { name: "Joey", hasADog: null },
      ],
      "hasADog"
    )
  ).toBeFalsy();
});
