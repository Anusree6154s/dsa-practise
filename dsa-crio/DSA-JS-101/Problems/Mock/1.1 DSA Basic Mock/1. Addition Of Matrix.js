// Problem Description
// Given two matrices of dimension n*m. Add the two matrices and print the resultant matrix.

// Input format
// First line contains two space separated integers n , m.
// In next 2*n lines each line contains m elements in which first n lines are for first matrix next n for second matrix.

// Output format
// Print the resultant matrix.

// Sample Input 1
// 2 3
// 1 2 3
// 4 5 6
// 1 1 1
// 1 1 1

// Sample Output 1
// 2 3 4
// 5 6 7

// Explanation
// The addition of the given two matrices results in the given output.

// Constraints
// 1 <= n,m <= 100

// 0 <= element of matrices <= 100000

//tc=n*m sc=n*m
function additionOfMatrix(matrix1, matrix2) {
  let result = [];
  for (let i = 0; i < matrix1.length; i++) { //tc=n
    result.push([]);
    for (let j = 0; j < matrix1[i].length; j++) { //tc=m
      result[i].push(matrix1[i][j] + matrix2[i][j]);
    }
  }

  return result
}

let [n, m] = [2, 3];
let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
];
let matrix2 = [
  [1, 1, 1],
  [1, 1, 1],
];
let finalMatrix = additionOfMatrix(matrix1, matrix2);
for (const row of finalMatrix) {
  console.log(...row);
}
