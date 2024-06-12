// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

// Input format
// One line of input, containing a single integer A.

// Output format
// Print a 2-d matrix of size A x A satisfying the spiral order.

// Sample Input 1
// 3

// Sample Output 1
// 1 2 3
// 8 9 4
// 7 6 5

// Explanation
// As you can see the matrix goes spirally with each next position incremented by one.

// Constraints
// 1<=A<=1000

//tc=n^2, sc=n^2
function spiralMatrixII(n) {
    //we are asked to push numbers 1 to n*n into a matrix in spiral order


    let result = []
    //first creting array and subarrays
    for (let i = 0; i < n; i++) {
        result.push([])
    }

    // we will bwe working by incrementing frist row and first col, and decrementing last row and last col 
    let firstrow = 0, lastrow = n - 1
    let firstcol = -1, lastcol = n - 1 //firstcol starting -1 because of some adjustments when the first for loo runs
    let number = 1 //till n*n

    while (number <= (n * n)) {


        //for const first row and variable cols
        firstcol++
        for (let col = firstcol; col <= lastcol; col++) {
            result[firstrow][col] = number
            number++
        }
        
        //for const last col and variable rows
        firstrow++
        for (let row = firstrow; row <= lastrow; row++) {
            result[row][lastcol] = number
            number++
        }
        
        //for const last row and variable cols
        lastcol--
        for (let col = lastcol; col >= firstcol; col--) {
            result[lastrow][col] = number
            number++
        }
        
        //for const first col and variable rows
        lastrow--
        for (let row = lastrow; row >= firstrow; row--) {
            console.log(row, firstcol, number)
            result[row][firstcol] = number
            number++
        }
        console.log(number, n)
    }
    console.log(result)
    return result
}

let n = 3

let resultArr = spiralMatrixII(n);

let resultStr = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        resultStr += resultArr[i][j] + " ";
    }
    resultStr += "\n"
}
console.log(resultStr)
