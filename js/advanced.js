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
var vehichleArr = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(Type, Model, Year, Horsepower, Fuel_type, Price) {
        this.Type = Type;
        this.Model = Model;
        this.Year = Year;
        this.Horsepower = Horsepower;
        this.Fuel_type = Fuel_type;
        this.Price = Price;
        vehichleArr.push(this);
    }
    Vehicles.prototype.render = function () {
        return "\n\t\t<div class=\"card col-3 bg-dark text-white m-auto py-2\">\n\t\t<p>" + this.Type + "</p>\n\t\t<p>" + this.Model + "</p>\n\t\t<p>" + this.Year + "</p>\n\t\t<p>" + this.Horsepower + "</p>\n\t\t<p>" + this.Fuel_type + "</p>\n\t\t<button class=\"btns btn btn-warning\">Click for Price</button>\n\t\t<p class=\"Price\"></p>\n\t\t</div>";
    };
    Vehicles.prototype.renderMore = function () {
        return "\n\t\t<div>Price " + this.Price + "</div>";
    };
    return Vehicles;
}());
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(Type, Model, Year, Horsepower, Fuel_type, Price, weight) {
        var _this = _super.call(this, Type, Model, Year, Horsepower, Fuel_type, Price) || this;
        _this.weight = weight;
        return _this;
    }
    return Trucks;
}(Vehicles));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(Type, Model, Year, Horsepower, Fuel_type, Price, color) {
        var _this = _super.call(this, Type, Model, Year, Horsepower, Fuel_type, Price) || this;
        _this.color = "";
        _this.color = color;
        return _this;
    }
    return Motorcycle;
}(Vehicles));
var Volvo = new Vehicles("Car", "XC40", 2020, 110, "gas", 40000);
var Toyota = new Trucks("Truck", "Tacoma", 2020, 120, "diesel", 47000, "3500kg");
var BMW = new Motorcycle("Motorcycle", "F 900 XR", 2020, 105, "gas", 20000, "Red");
$(document).ready(function () {
    for (var i in vehichleArr) {
        document.getElementById("result").innerHTML += vehichleArr[i].render();
    }
    var btns = document.getElementsByClassName("btns");
    var _loop_1 = function (i) {
        btns[i].addEventListener("click", function () {
            document.getElementsByClassName("Price")[i].innerHTML += vehichleArr[i].renderMore();
        }, { once: true });
    };
    for (var i in vehichleArr) {
        _loop_1(i);
    }
    // $('.btn-block').on('click', function(){
    // 	$('.card-body').empty();
    // 	var index= $(this).siblings('p:first').attr('id');
    // 	$(`#collapse${index}`).text(vehichleArr[index].calcPrice());
    // })
});
