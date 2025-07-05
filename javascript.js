

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
//print the value in the console
console.log(value); // Outputs: 25

// function pagalHai() {
//   let x = document.getElementById("demo");
//   x.innerHTML = "Paragraph changed.";
// }

frruits = ["Banana", "Orange", "Apple", "Mango"];
for (let i = 0; i < frruits.length; i++) {
  console.log(frruits[i]);
}

let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
console.log(x); // Outputs: 12

let car = "Fiat";
console.log(car); // Outputs: Fiat

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
// Access Object Properties
console.log(person.firstName); // Outputs: John
