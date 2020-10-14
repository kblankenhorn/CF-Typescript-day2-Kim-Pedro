"use strict"
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


