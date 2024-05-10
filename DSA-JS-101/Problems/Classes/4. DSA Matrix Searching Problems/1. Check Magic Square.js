// Problem Description
// Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not.
// Magic square is a square that has the same sum of rows, columns and diagonals.

// Sample Input 1
// 3
// 4 9 2
// 3 5 7
// 8 1 6

// Sample Output 1
// Yes

// Explanation
// All rows, columns and diagonals have sum 15.

// Constraints
// 1 <= n <= 100
// 1 <= element of matrix <= n*n

function checkMagicSquare(n, matrix) {
    let referenseSum=0
    for(let i=0; i<n; i++){
        referenseSum+=matrix[0][i]
    }

    //rows
    let sum=0
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            sum+=matrix[i][j]
        }
        if(referenseSum!==sum){
            return false
        }
        sum=0
    }
    //columns
    sum=0
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            sum+=matrix[j][i]
        }
        if(referenseSum!==sum){
            return false
        }
        sum=0
    }

    //diagonal1
    sum=0
    for(let i=0; i<n; i++){
        sum+=matrix[i][i]
    }
    if(referenseSum!==sum){
        return false
    }

    sum=0
    for(let i=0; i<n; i++){
        sum+=matrix[i][n-1]
    }
    if(referenseSum!==sum){
        return false
    }

    return true
}

let matrix = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];
let n = 3;
let result = checkMagicSquare(n, matrix);
if (result == true) {
  console.log("Yes");
} else {
  console.log("No");
}
