
class Person{
	firstName = "";
	lastName = "";
	job = "";
	age = ""

	
	constructor(firstName, lastName, job, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.job = job;
		this.age = age;
	}

	name (){
		return `Hi my name is ${this.firstName} ${this.lastName} ${this.job} ${this.age}`;
	}
	whoAreYou() {
		return `Hi, ${this.name()}`;
	}
}
	
	 let fullName = new Person("Mario", "Nelson", "IT", "30");
     console.log(fullName.whoAreYou());

class More extends Person {
	salary: string = " ";
	location: string = " ";
	

	constructor(firstName, lastName, job, age, salary, location){
	super(firstName, lastName, job, age);
	this.location=location;
	this.salary = salary;
	}

	whoAreYou() {
	return `${super.whoAreYou()} and I get ${this.salary} in ${this.location}`;
}

}

let employee = new More("Mario", "Nelson", "IT", "30", "3000EUR", "Vienna");
console.log(employee.whoAreYou());
