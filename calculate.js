let a = parseFloat(prompt("Enter a number:"));
let b = parseFloat(prompt("Enter another number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let result;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    if (b !== 0) {
        result = a / b;
    } else {
        result = "Error: Division by zero is not allowed.";
    }
} else {
    result = "Error: Invalid operator.";
}

console.log("Result: " + result);
