"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, lastName, job, age) {
        this.firstName = "";
        this.lastName = "";
        this.job = "";
        this.age = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.age = age;
    }
    Person.prototype.name = function () {
        return "Hi my name is " + this.firstName + " " + this.lastName + " " + this.job + " " + this.age;
    };
    Person.prototype.whoAreYou = function () {
        return "Hi, " + this.name();
    };
    return Person;
}());
var fullName = new Person("Mario", "Nelson", "IT", "30");
console.log(fullName.whoAreYou());
