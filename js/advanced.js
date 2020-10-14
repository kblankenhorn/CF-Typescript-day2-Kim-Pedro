var Vehicles = /** @class */ (function () {
    function Vehicles(Make, Model, Year, Horsepower) {
        this.Make = "";
        this.Model = "";
        this.Year = "";
        this.Horsepower = "";
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
        this.Horsepower = Horsepower;
    }
    Vehicles.prototype.Auto = function () {
        return " " + this.Make + " " + this.Model + " " + this.Year + " " + this.Horsepower;
    };
    Vehicles.prototype.Info = function () {
        return "" + this.Auto;
    };
    return Vehicles;
}());
var Car = new Vehicles("Tesla", "Model3", "2020", "120");
console.log(Car.Info());
