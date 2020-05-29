const Person = function (firstAndLast) {
  if (arguments.length !== 1 || typeof arguments[0] !== "string") return;

  let [firstName, lastName] = firstAndLast.split(" ");
  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };
  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.setFirstName = function (first) {
    firstName = first;
  };
  this.setLastName = function (last) {
    lastName = last;
  };
  this.setFullName = function (firstAndLast) {
    [firstName, lastName] = firstAndLast.split(" ");
  };
};

module.exports = Person;
