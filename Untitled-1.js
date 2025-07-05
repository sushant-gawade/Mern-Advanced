//quention 1
let i = 1;
while (i <= 10) {
  console.log(3 * i);
  i++;
}
// Output: 3 6 9 12 15 18 21 24 27 30
//quention 2
for (let i = 1; i <= 20; i++) {
  console.log(`Roll No: ${i}`);
}
//question 3
for (let i = 1; i <= 10; i++) {
  console.log(`Square of ${i} is ${i * i}`);
}
//question 4
let sum = 0;
for (let i = 2; i <= 50; i += 2) {
  sum += i;
}
console.log("Sum of even numbers:", sum);
