// Problem Description
// Given an m x n matrix, if an element is 0, set its entire row and column to 0.

// Do it in-place, that is, modify the same matrix. Do not create a new one.

// Input format
// First line contains 2 integers m,n - number of rows and columns respectively.

// Next m lines contain space separated n integers.

// Output format
// Output the same matrix.

// Sample Input 1
// 3 3

// 1 1 1
// 1 0 1
// 1 1 1

// Sample Output 1
// 1 0 1

// 0 0 0

// 1 0 1

// Explanation 1
// There is one ‘0’ in the 2nd row and 2nd column, so all the elements in that row and column become 0.

function setMatrixZeroes(matrix) {
    let rows = []
    let cols = []

    //stroe the values of row and col where 0s exist
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                rows.push(i)
                cols.push(j)
            }
        }
    }

    //for the values of rows array, change valus of cols in matrix
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i]
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = 0
        }
    }

    //for the values of cols array, change valus of rows in matrix
    for (let i = 0; i < cols.length; i++) {
        let col = cols[i]
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][col] = 0
        }
    }

    return matrix
}

let [m, n] = [3, 3]
let matrix = [[1, 1, 1],
[1, 0, 1],
[1, 1, 1]];


let resultMatrix = setMatrixZeroes(matrix);
console.log(resultMatrix)

