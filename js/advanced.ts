const vehicleArr:Array<any>=[];

class Vehicles{
	
	Type: string;
	Model: string;
	Year: number;
	Horsepower: number;
	Fuel_type: string;
	Seats: number;
	img: string;
	

	constructor(Type, Model, Year, Horsepower, Fuel_type, Seats, img){
		
		this.Type = Type;
		this.Model = Model;
		this.Year = Year;
		this.Horsepower = Horsepower;
		this.Fuel_type = Fuel_type;
		this.Seats = Seats;
		this.img = img
		vehicleArr.push(this);

	}

	 calculatePrice(){
    var price:number;
    if (this.Fuel_type === "gas") {
      switch(this.Type){
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
    } else {
        switch(this.Type){
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
    return `Price of this ${this.Type} is ${price} EUR`
  }


	render(){
		return `
		<div class="card col-3 bg-dark text-white m-auto py-2" id="carInfo">
		
		<p>Type: ${this.Type}</p>
		<p>Model: ${this.Model}</p>
		<p>Year: ${this.Year}</p>
		<p>HP: ${this.Horsepower}</p>
		<p>Fuel: ${this.Fuel_type}</p>
		<img class="img-fluid mb-2" style="width: 20rem; height: 10rem;" src="${this.img}">
		<button class="btns btn btn-warning">Click for Price</button>
		<p class="Price"></p>
		</div>`	
	}

	renderMore(){
		return `
		<div style="height: 3rem;">${this.calculatePrice()}</div>`
	}
}	


	class Trucks extends Vehicles {
		weight: number;

		constructor(Type:string, Model: string, Year:number, Horsepower: number, Fuel_type: string, Seats: number, img:string, weight: number,  ){
			super(Type, Model, Year, Horsepower, Fuel_type, Seats, img);
			this.weight = weight;
		}

		calculatePrice(){
			return `${super.calculatePrice()} and this vehicle is ${this.weight} kg.`
		}
	}

	class Motorcycle extends Vehicles {
		color:string = "";

		constructor(Type:string, Model:string, Year:number, Horsepower: number, Fuel_type: string, Seats: number, img:string, color:string){
			super(Type, Model, Year, Horsepower, Fuel_type, Seats, img);
			this.color = color;
		}

		calculatePrice(){
			return `${super.calculatePrice()} and this vehicle is ${this.color}.`
		}
	}

	var Volvo = new Vehicles("Car", "XC40", 2020, 110, "gas",5,"./img/car.jpg");
	var Toyota = new Trucks("Truck", "Tacoma", 2020, 120, "diesel", 5, "./img/truck.jpg", 3500);
	var BMW = new Motorcycle("Motorcycle", "F 900 XR", 2020, 105, "gas", 1,"./img/bike.jpg","Red");

	$(document).ready(function(){

		for(let i in vehicleArr){
			document.getElementById("result").innerHTML+=vehicleArr[i].render();
		}
	let btns=document.getElementsByClassName("btns");
	
	for(let i in vehicleArr){
		btns[i].addEventListener("click", function(){
			document.getElementsByClassName("Price")[i].innerHTML+= vehicleArr[i].renderMore()
		}, {once:true});
	}	

		// $('.btn-block').on('click', function(){
		// 	// $('.card-body').empty();
		// 	var index= $(this).siblings('p:last').attr('id');
		// 	$(`.Price${index}`).text(vehicleArr[index].calcPrice());
		// })
	})








