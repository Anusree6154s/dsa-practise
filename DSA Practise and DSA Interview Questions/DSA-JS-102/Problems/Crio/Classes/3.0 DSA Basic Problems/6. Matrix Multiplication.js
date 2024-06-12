// Problem Description
// You are given two matrices grid1 and grid2. You must multiply the matrices and return the result.

// Refer to https://www.mathsisfun.com/algebra/matrix-multiplying.html for matrix multiplication basics.

// Note: The number of columns in the first matrix will always be equal to the number of rows in the second matrix.


// Input format
// The input consists of the dimensions of the first matrix, followed by the values in that matrix. The values are input by the rows of the matrix. The same input format is used for the second matrix.


// Output format
// The output format is a product of the two input matrices.


// Sample Input
// 2 2

// 1 4
// 5 9

// 2 5

// 1 2 8 8 4
// 3 3 6 5 2


// Sample Output
// 13 14 32 28 12

// 32 37 94 85 38


// Explanation
// The first matrix is a 2 x 2 matrix and the second matrix is a 2 x 5 matrix. Following the matrix multiplication rules, we get the resultant matrix which has the size 2 x 5.


//tc=n1*m1*m1=2 , sc=n1*m2
function matrixMultiplication(n1, m1, n2, m2, grid1, grid2) {
    let result = []
    for (let i = 0; i < n1; i++) {
        result.push([])
        for (let k = 0; k < m2; k++) {
            let sum = 0
            for (let j = 0; j < m1; j++) {
                let product = grid1[i][j] * grid2[j][k]
                sum = sum + product
            }
            result[i].push(sum)
        }
    }

    return result
}

let [n1, m1] = [2, 2]
let grid1 = [[1, 4],
[5, 9]];
let [n2, m2] = [2, 5]
let grid2 = [[1, 2, 8, 8, 4],
[3, 3, 6, 5, 2]];
let res = matrixMultiplication(n1, m1, n2, m2, grid1, grid2);

for (const row of res) {
    console.log(...row);
}