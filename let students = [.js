let students = [
  { name: "Amit", age: 24 },
  { name: "Ravi", age: 20 },
  { name: "Neha", age: 22 }
];

// Sort by age
students.sort((a, b) => a.age - b.age);

console.log(students);
/*
[
  { name: 'Ravi', age: 20 },
  { name: 'Neha', age: 22 },
  { name: 'Amit', age: 24 }
]
*/
