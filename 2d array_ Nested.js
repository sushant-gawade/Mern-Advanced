let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(arr[0][0]); // 1
console.log(arr[1][1]); // 5    
console.log(arr[2][2]); // 9

// print in matrix
for (let i = 0; i < arr.length; i++) {
    let row = "";
    for (let j = 0; j < arr[i].length; j++) {
        row += arr[i][j] + " ";
    }
    console.log(row.trim());
}
// Output:
// 1 2 3    
// 4 5 6
// 7 8 9


for (let element of arr) {
    for (let value of element) {
        console.log(value);
    }
}

let data = [
    [10,20],
    [30,40],
    [50,60]
]
console.log(data[1][1]); 

let marks = [
    [85, 90, 95],
    [80, 75, 70],
    [60, 65, 70]
]
marks [2][2]=95;
console.log(marks[2][2]); // 95

// let grid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// //print each number only by one using a loop
// for(let i=0; 1<grid.length; i++) {
//     for(let j=0; j<grid[i].length; j++) {
//         console.log(grid[i][j]);
//     }
// }

let items = [
    [1,2,3],
    [4,5],
    [6]
];
//count and print the total number of individual numbers inside the nested array
let count = 0;
for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items[i].length; j++) {
        count++;
    }
}
console.log("Total number of elements in the 2D array: " + count); 

//sum of all elements
let matrix = [
    [2,4],
    [6,8],
    [10,12]
    ];
// find and print the sum of all elements.
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
}
console.log("Sum of all elements in the matrix: " + sum);

// flatten the nested array
let nestedArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8]
];
let flattenedArray = [];
for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        flattenedArray.push(nestedArray[i][j]);
    }
}
console.log("Flattened array: " + flattenedArray.join(", "));

//q7. get first element of each inner array
let nestedArray2 = [
    [10, 20],
    [30, 40],
    [50, 50]
];
//print the first element of each inner array
let firstElements = [];
for (let i = 0; i < nestedArray2.length; i++) {
    firstElements.push(nestedArray2[i][0]);
}
console.log("First elements of each inner array: " + firstElements.join(", "));

//q8. replace all even numbers with 0
let nestedArray3 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
// replace all even numbers with 0
for (let i = 0; i < nestedArray3.length; i++) {
    for (let j = 0; j < nestedArray3[i].length; j++) {
        if (nestedArray3[i][j] % 2 === 0) {
            nestedArray3[i][j] = 0;
        }
    }
}
console.log("Array after replacing even numbers with 0:");
for (let i = 0; i < nestedArray3.length; i++) {
    console.log(nestedArray3[i].join(", "));
}
// q9. count how many old numbers are there

let nums =[
    [2,5],
    [7,8],
    [9,12]
];
//count how many odd numbers are in the nested array
let oddCount = 0;
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        if (nums[i][j] % 2 !== 0) {
            oddCount++;
        }
    }
}
console.log("Total number of odd numbers in the nested array: " + oddCount);

// q10. add a new inner array
let students = [
    ["Alice", "Bob"],
    ["Charlie", "David"]
];
//add a new row ["pooja", "Simran"] at the end
students.push(["Pooja", "Simran"]);
console.log("Students after adding a new row:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].join(", "));
}





