var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var More = /** @class */ (function (_super) {
    __extends(More, _super);
    function More(firstName, lastName, job, age, salary, location) {
        var _this = _super.call(this, firstName, lastName, job, age) || this;
        _this.salary = " ";
        _this.location = " ";
        _this.location = location;
        _this.salary = salary;
        return _this;
    }
    More.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " and I get " + this.salary + " in " + this.location;
    };
    return More;
}(Person));
var employee = new More("Mario", "Nelson", "IT", "30", "3000EUR", "Vienna");
console.log(employee.whoAreYou());
