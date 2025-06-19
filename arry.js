//sum of array
let board = [
    [4, 7, 2],
    [9, 6, 1],
    [8, 3, 5]
]
// count the number of even numbers in the array
let evenCount = 0;
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] % 2 === 0) {
            evenCount++;
        }
    }
}
console.log("Total number of even numbers in the array: " + evenCount);

