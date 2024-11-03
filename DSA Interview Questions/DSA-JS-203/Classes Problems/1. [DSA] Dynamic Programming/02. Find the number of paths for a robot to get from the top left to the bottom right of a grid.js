// Problem Description
// A robot is located at the top-left corner(1,1) of a m x n grid(m rows , n columns).

// The robot can only move either down or right at any point in time.

// The robot is trying to reach the bottom-right corner(m,n) of the grid.

// How many possible unique paths are there?

// Input format
// Single line containing two space separated integers representing m and n respectively.

// Output format
// Print the answer in the single line

// Sample Input 1
// 3 2

// Sample Output 1
// 3

// Constraints
// m and n will be at most 1000.

// print the answer modulo 1000000007.

function uniquePaths(n, m) {
    //every row is +1 path
    //every column in +1 path
    // so we prefill a matrix with path values

    const mod = 1000000007;
    let matrix = new Array(n+1).fill(new Array(m+1).fill(0))
    matrix[1][1] = 1

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i == 1 && j == 1) continue
            matrix[i][j] = (matrix[i - 1][j] + matrix[i][j - 1])%mod
        }
    }

    return matrix[n][m]
}

console.log(uniquePaths(3, 2))