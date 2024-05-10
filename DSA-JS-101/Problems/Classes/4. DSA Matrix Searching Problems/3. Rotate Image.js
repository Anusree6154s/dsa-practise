// Problem Description
// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).
// Note:
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Input format
// There are N+1 lines of input.
// First line contains one integer N.
// Next N line contains N space separated integers

// Output format
// Print the NxN rotated matrix.

// Sample Input 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output 1
// 7 4 1
// 8 5 2
// 9 6 3

// Sample Input 2
// 4
// 5 1 9 11
// 2 4 8 10
// 13 3 6 7
// 15 14 12 16

// Sample Output 2
// 15 13 2 5
// 14 3 4 1
// 12 6 8 9
// 16 7 10 11

// Constraints
// 1 <= n <= 100

function rotateImage(n, matrix) {
    function swap(matrix, r1, c1, r2, c2) {
        [matrix[r1][c1], matrix[r2][c2]] = [matrix[r2][c2], matrix[r1][c1]]
    }


    function mirrorHorizontal() {
        for (let i = 0; i < Math.ceil(n / 2); i++) {
            for (let j = 0; j < n; j++) {
                swap(matrix, i, j, n - i - 1, j)
            }
        }
    }

    function mirrorDiagonal() {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j <= i; j++) {
                swap(matrix, i, j, j, i)
            }
        }
    }

    mirrorHorizontal()
    mirrorDiagonal()
    
    return matrix
}

let n = 3;
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let rotatedImage = rotateImage(n, matrix);
let resultStr = "";

for (let i in rotatedImage) {
    for (let j in rotatedImage[i]) {
        resultStr += rotatedImage[i][j] + " ";
    }
    console.log(resultStr);
    resultStr ="";
}

