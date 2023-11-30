/* 
   File: complex_program.js
   Description: A complex JavaScript program that demonstrates advanced concepts and techniques.
   Author: AI Developer
*/

/* 
   Note: This code is for demonstration purposes and may not have any specific functionality. It aims to showcase complex JavaScript concepts and programming techniques.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing an Employee
class Employee extends Person {
  constructor(name, age, empId) {
    super(name, age);
    this.empId = empId;
  }

  introduce() {
    console.log(`I am an employee with ID ${this.empId}.`);
  }
}

// Function generating a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of names to generate random persons
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Generate 10 random persons
const persons = [];
for (let i = 0; i < 10; i++) {
  const name = names[getRandomNumber(0, names.length - 1)];
  const age = getRandomNumber(18, 65);
  const person = new Person(name, age);
  persons.push(person);
}

// Print details of generated persons
persons.forEach((person) => {
  person.greet();
});

// Generate an employee
const empId = getRandomNumber(1000, 9999);
const employee = new Employee('John Doe', 30, empId);
employee.greet();
employee.introduce();

// Async function with Promise
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
  }
}

// Call the async function
fetchData();