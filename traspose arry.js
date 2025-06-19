let board = [
    [1, 2, 3],
    [4, 5, 6],
]; 
// Transpose the 2D array 3*2 to 2*3
let transposedBoard = [];
for (let i = 0; i < board[0].length; i++) {
    transposedBoard[i] = [];
    for (let j = 0; j < board.length; j++) {
        transposedBoard[i][j] = board[j][i];
    }
}   
console.log("Transposed array:");
for (let i = 0; i < transposedBoard.length; i++) {
    console.log(transposedBoard[i].join(", "));
}
// Output:
// Transposed array:    
// 1, 4
// 2, 5
// 3, 6

