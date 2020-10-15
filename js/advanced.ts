const vehichleArr:Array<any>=[];

class Vehicles{
	Type: string;
	Model: string;
	Year: number;
	Horsepower: number;
	Fuel_type: string;
	Price: number;

	constructor(Type, Model, Year, Horsepower, Fuel_type, Price){
		this.Type = Type;
		this.Model = Model;
		this.Year = Year;
		this.Horsepower = Horsepower;
		this.Fuel_type = Fuel_type;
		this.Price = Price;
		vehichleArr.push(this);

	}

	render(){
		return `
		<div class="card col-3 bg-dark text-white m-auto py-2">
		<p>${this.Type}</p>
		<p>${this.Model}</p>
		<p>${this.Year}</p>
		<p>${this.Horsepower}</p>
		<p>${this.Fuel_type}</p>
		<button class="btns btn btn-warning">Click for Price</button>
		<p class="Price"></p>
		</div>`	
	}

	renderMore(){
		return `
		<div>Price ${this.Price}</div>`
	}
}	


	class Trucks extends Vehicles {
		weight: string;

		constructor(Type:string, Model: string, Year:number, Horsepower: number, Fuel_type: string, Price: number, weight: string){
			super(Type,Model,Year,Horsepower,Fuel_type,Price);
			this.weight = weight;
		}
	}

	class Motorcycle extends Vehicles {
		color:string = "";

		constructor(Type:string, Model:string, Year:number, Horsepower: number, Fuel_type: string, Price: number, color:string){
			super(Type,Model,Year,Horsepower,Fuel_type,Price);
			this.color = color;
		}
	}

	var Volvo = new Vehicles("Car", "XC40", 2020, 110, "gas",40000);
	var Toyota = new Trucks("Truck", "Tacoma", 2020, 120, "diesel", 47000, "3500kg");
	var BMW = new Motorcycle("Motorcycle", "F 900 XR", 2020, 105, "gas", 20000,"Red");

	$(document).ready(function(){

		for(let i in vehichleArr){
			document.getElementById("result").innerHTML+=vehichleArr[i].render();
		}
	let btns=document.getElementsByClassName("btns");
	
	for(let i in vehichleArr){
		btns[i].addEventListener("click", function(){
			document.getElementsByClassName("Price")[i].innerHTML+= vehichleArr[i].renderMore()
		}, {once:true});
	}	

		// $('.btn-block').on('click', function(){
		// 	$('.card-body').empty();
		// 	var index= $(this).siblings('p:first').attr('id');
		// 	$(`#collapse${index}`).text(vehichleArr[index].calcPrice());
		// })
	})








