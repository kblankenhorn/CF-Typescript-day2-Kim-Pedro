var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicleArr = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(Type, Model, Year, Horsepower, Fuel_type, Seats, img) {
        this.Type = Type;
        this.Model = Model;
        this.Year = Year;
        this.Horsepower = Horsepower;
        this.Fuel_type = Fuel_type;
        this.Seats = Seats;
        this.img = img;
        vehicleArr.push(this);
    }
    Vehicles.prototype.calculatePrice = function () {
        var price;
        if (this.Fuel_type === "gas") {
            switch (this.Type) {
                case 'Car':
                    price = this.Year + this.Horsepower / this.Seats;
                    break;
                case "Truck":
                    price = this.Year + this.Horsepower / this.Seats;
                    break;
                case "Motorbike":
                    price = this.Year + this.Horsepower / this.Seats;
                    break;
                default:
                    price = this.Year + this.Horsepower / this.Seats;
            }
        }
        else {
            switch (this.Type) {
                case "Car":
                    price = this.Year + this.Horsepower / this.Seats * 10000;
                    break;
                case "Truck":
                    price = this.Year + this.Horsepower / this.Seats * 10000;
                case "Motorbike":
                    price = this.Year + this.Horsepower / this.Seats * 10000;
                    break;
                default:
                    price = this.Year + this.Horsepower / this.Seats * 10000;
            }
        }
        return "Price of this " + this.Type + " is " + price + " EUR";
    };
    Vehicles.prototype.render = function () {
        return "\n\t\t<div class=\"card col-3 bg-dark text-white m-auto py-2\" id=\"carInfo\">\n\t\t\n\t\t<p>Type: " + this.Type + "</p>\n\t\t<p>Model: " + this.Model + "</p>\n\t\t<p>Year: " + this.Year + "</p>\n\t\t<p>HP: " + this.Horsepower + "</p>\n\t\t<p>Fuel: " + this.Fuel_type + "</p>\n\t\t<img class=\"img-fluid mb-2\" style=\"width: 20rem; height: 10rem;\" src=\"" + this.img + "\">\n\t\t<button class=\"btns btn btn-warning\">Click for Price</button>\n\t\t<p class=\"Price\"></p>\n\t\t</div>";
    };
    Vehicles.prototype.renderMore = function () {
        return "\n\t\t<div style=\"height: 3rem;\">" + this.calculatePrice() + "</div>";
    };
    return Vehicles;
}());
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(Type, Model, Year, Horsepower, Fuel_type, Seats, img, weight) {
        var _this = _super.call(this, Type, Model, Year, Horsepower, Fuel_type, Seats, img) || this;
        _this.weight = weight;
        return _this;
    }
    Trucks.prototype.calculatePrice = function () {
        return _super.prototype.calculatePrice.call(this) + " and this vehicle is " + this.weight + " kg.";
    };
    return Trucks;
}(Vehicles));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(Type, Model, Year, Horsepower, Fuel_type, Seats, img, color) {
        var _this = _super.call(this, Type, Model, Year, Horsepower, Fuel_type, Seats, img) || this;
        _this.color = "";
        _this.color = color;
        return _this;
    }
    Motorcycle.prototype.calculatePrice = function () {
        return _super.prototype.calculatePrice.call(this) + " and this vehicle is " + this.color + ".";
    };
    return Motorcycle;
}(Vehicles));
var Volvo = new Vehicles("Car", "XC40", 2020, 110, "gas", 5, "./img/car.jpg");
var Toyota = new Trucks("Truck", "Tacoma", 2020, 120, "diesel", 5, "./img/truck.jpg", 3500);
var BMW = new Motorcycle("Motorcycle", "F 900 XR", 2020, 105, "gas", 1, "./img/bike.jpg", "Red");
$(document).ready(function () {
    for (var i in vehicleArr) {
        document.getElementById("result").innerHTML += vehicleArr[i].render();
    }
    var btns = document.getElementsByClassName("btns");
    var _loop_1 = function (i) {
        btns[i].addEventListener("click", function () {
            document.getElementsByClassName("Price")[i].innerHTML += vehicleArr[i].renderMore();
        }, { once: true });
    };
    for (var i in vehicleArr) {
        _loop_1(i);
    }
    // $('.btn-block').on('click', function(){
    // 	// $('.card-body').empty();
    // 	var index= $(this).siblings('p:last').attr('id');
    // 	$(`.Price${index}`).text(vehicleArr[index].calcPrice());
    // })
});
