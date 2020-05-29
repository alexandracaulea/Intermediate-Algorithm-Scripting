const Person = require("./index");

test("Person exists.", () => {
  expect(Person).toBeDefined();
});

test("Object.keys(carla).length returns 6.", () => {
  const carla = new Person("Carla Stolky");
  expect(Object.keys(carla).length).toBe(6);
});

test("carla instanceof Person returns true.", () => {
  const carla = new Person("Carla Stolky");
  expect(carla instanceof Person).toBeTruthy;
});

test("bob.firstName returns undefined.", () => {
  const bob = new Person("Bob Bobby");
  expect(bob.firstName).toBe(undefined);
});

test("bob.lastName returns undefined.", () => {
  const bob = new Person("Bob Bobby");
  expect(bob.lastName).toBe(undefined);
});

test("sandra.getFullName() returns the 'Sandra Bujgy'.", () => {
  const sandra = new Person("Sandra Bujgy");
  expect(sandra.getFullName()).toBe("Sandra Bujgy");
});

test("sandra.getFullName() returns the 'Janet Bujgy'.", () => {
  const sandra = new Person("Sandra Bujgy");
  sandra.setFirstName("Janet");
  expect(sandra.getFullName()).toBe("Janet Bujgy");
});

test("sandra.getFullName() returns 'Sandra Altenwerth'.", () => {
  const sandra = new Person("Sandra Bujgy");
  sandra.setLastName("Altenwerth");
  expect(sandra.getFullName()).toBe("Sandra Altenwerth");
});
