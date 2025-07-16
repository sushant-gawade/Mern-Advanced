let a = 23;
console.log(a);

let fruits = ["Danana", "Apple", "Mango", "Cherry"];
fruits.sort();

console.log(fruits);
// Output: [ 'Apple', 'Banana', 'Cherry', 'Mango' ]

let numbers = [10, 5, 100, 1];
numbers.sort(); 

console.log(numbers); 
// Output: [1, 10, 100, 5] ❌ (Wrong for numbers!)

let str = "hello";
let reversedStr = str.split('').join('');

console.log(reversedStr);
// Output: "olleh"

let b = 5;
console.log(b == "5");  // true
console.log(b === "5"); // false

let age = 18;
if (age < 10){
    console.log("minor");
}else if (age >= 18 && age < 60){
    console.log("adult");
}else{
    console.log("senior");
}

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Red fruit");
    break;
  case "banana":
    console.log("Yellow fruit");
    break;
  default:
    console.log("Unknown fruit");
}
for (let i = 0; i < 5; i++) {
  console.log("i = " + i);
}
let i = 0;
while (i < 5) {
  console.log("i = " + i);
  i++;
}

let strp = " Hello World ";
console.log(strp.trim().toUpperCase()); // "HELLO WORLD"

let msg = "Welcome to JavaScript";
console.log(msg.includes("Java"));  // true

let date = new Date();
console.log(date.getFullYear()); // e.g., 2025
