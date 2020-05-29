const orbitalPeriod = require("./index");

test("orbitalPeriod function is defined.", () => {
  expect(orbitalPeriod).toBeDefined();
});

test("the argument passed to orbitalPeriod is an array.", () => {
  expect(orbitalPeriod("b")).toBe(undefined);
  expect(orbitalPeriod(1)).toBe(undefined);
  expect(orbitalPeriod({ a: 5 })).toBe(undefined);
  expect(orbitalPeriod(1, { a: 5 }, [1])).toBe(undefined);
});

test("orbitalPeriod function returns an array.", () => {
  const result = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
  expect(Array.isArray(result)).toBeTruthy();
  expect(result).toStrictEqual([{ name: "sputnik", orbitalPeriod: 86400 }]);
});

test("orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]) returns [{ name: 'sputnik', orbitalPeriod: 86400 }].", () => {
  expect(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])).toEqual([{ name: "sputnik", orbitalPeriod: 86400 }]);
});

test("orbitalPeriod([{ name: 'iss', avgAlt: 413.6 }, { name: 'hubble', avgAlt: 556.7 }, { name: 'moon', avgAlt: 378632.553 }]) returns [{ name: 'iss', orbitalPeriod: 5557 }, { name: 'hubble', orbitalPeriod: 5734 }, { name: 'moon', orbitalPeriod: 2377399 }].", () => {
  expect(
    orbitalPeriod([
      { name: "iss", avgAlt: 413.6 },
      { name: "hubble", avgAlt: 556.7 },
      { name: "moon", avgAlt: 378632.553 },
    ])
  ).toEqual([
    { name: "iss", orbitalPeriod: 5557 },
    { name: "hubble", orbitalPeriod: 5734 },
    { name: "moon", orbitalPeriod: 2377399 },
  ]);
});
