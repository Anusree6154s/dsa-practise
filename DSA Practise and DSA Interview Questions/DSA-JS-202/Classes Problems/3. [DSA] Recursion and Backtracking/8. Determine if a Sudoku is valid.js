// Problem Description
// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.

// Each column must contain the digits 1-9 without repetition.

// Each of the nine 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'

// Input format
// You will be given a 9x9 grid.

// Output format
// Print "true" if the grid is valid sudoku otherwise “false”.

// Sample Input 1
// [["5","3",".",".","7",".",".",".","."]

// ,["6",".",".","1","9","5",".",".","."]

// ,[".","9","8",".",".",".",".","6","."]

// ,["8",".",".",".","6",".",".",".","3"]

// ,["4",".",".","8",".","3",".",".","1"]

// ,["7",".",".",".","2",".",".",".","6"]

// ,[".","6",".",".",".",".","2","8","."]

// ,[".",".",".","4","1","9",".",".","5"]

// ,[".",".",".",".","8",".",".","7","9"]]

// Sample Output 1
// true

function validSudoku(grid) {
    // we maintain 3 sets for rows, cols, and square(3x3)
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let squares = Array.from({ length: 9 }, () => new Set()); //where each value is calculated by row/3, col/3

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let num = grid[row][col]
            if (num== '.') continue

            let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)
            if (rows[row].has(num) || cols[col].has(num) || squares[boxIndex].has(num)) return false

            rows[row].add(num)
            cols[col].add(num)
            squares[boxIndex].add(num)
        }
    }

    return true
}

let grid = [["5", "3", ".", ".", "7", ".", ".", ".", "."]

    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]

    , [".", "9", "8", ".", ".", ".", ".", "6", "."]

    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]

    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]

    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]

    , [".", "6", ".", ".", ".", ".", "2", "8", "."]

    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]

    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
let result = validSudoku(grid)
console.log(result)