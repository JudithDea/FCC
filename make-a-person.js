var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return firstAndLast;
  };

  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };

  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };

  this.setFullName = function (newFirstAndLast) {
    return (firstAndLast = newFirstAndLast);
  };

  this.setFirstName = function (newFirst) {
    return (firstAndLast = newFirst + " " + this.getLastName());
  };

  this.setLastName = function (newLast) {
    return (firstAndLast = this.getFirstName() + " " + newLast);
  };
};

var bob = new Person("Bob Ross");
bob.setFullName("Haskell");
console.log(bob.getFullName());
