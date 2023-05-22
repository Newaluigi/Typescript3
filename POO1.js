var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var john = new Person("John", 40);
var mary = new Person("Mary", 35);
john.tellMyName();
john.tellMyAge();
mary.tellMyName();
mary.tellMyAge();
