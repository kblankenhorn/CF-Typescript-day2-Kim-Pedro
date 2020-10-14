class Vehicles{
	Make = "";
	Model = "";
	Year = "";
	Horsepower = "";

	constructor(Make, Model, Year, Horsepower){
		this.Make = Make;
		this.Model = Model;
		this.Year = Year;
		this.Horsepower = Horsepower
	}
	Auto (){
		return ` ${this.Make} ${this.Model} ${this.Year} ${this.Horsepower}`;
	}

	Info (){
		return `${this.Auto}`;
	}	
}

let Car = new Vehicles("Tesla", "Model3", "2020", "120");
console.log(Car.Info());