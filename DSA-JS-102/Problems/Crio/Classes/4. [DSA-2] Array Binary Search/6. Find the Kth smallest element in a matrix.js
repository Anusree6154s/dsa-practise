// Problem Description
// Given nxn matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Input format
// First line contains two integers. N, denoting the size of the square matrix and K where we have to find the Kth Smallest element.

// Next N lines contain N integers each denoting the elements of the matrix.

// Output format
// Single containing one integer denoting the Kth smallest element.

// Sample Input 1
// 3 8

// 1 5 9

// 10 11 13

// 12 13 15

// Sample Output 1
// 13

// Explanation 1
// If written in non-decreasing order, elements are,

// 1 5 9 10 11 12 13 13 15

// Hence, 8th smallest element is 13.

// Constraints
// 1<=N<=1000

// 0<=Ai<=10^9

// 1<=K<=N^2

function kthSmallestElementInMatrix(matrix, k) {
    //we will do binary search for all numbers existing between matrix[0][0] and matrix[n-1][n-1]
    // then we find the position of the number 
    // if the  position<k, left=mid+1, else right=mid-1
    let n = matrix.length
    let left = matrix[0][0]
    let right = matrix[n - 1][n - 1]
    let ans = 0

    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        let position = findPosition(mid)
        if (position == k) {
            return mid
        } else {
            ans = mid
            left = mid + 1
        }
    }

    return ans
}

function findPosition(mid) {
    // let position = 0
    // //traversing matrix in O(n) time - using binary search again
    //we start from teh end of first row, then go to next row etc
    //if number> mid, move all cols from last to first
    // if number<=mid, move a row up to search for other numbers that may be also equal to mid 

    let row = 0
    let col = n - 1
    let count = 0
    while (row < n && col >= 0) {
        if (matrix[row][col] <= mid) {
            count = count + col + 1 
            row++
        } else {
            col--
        }
    }
    return count
}
let [n, k] = [3, 4];
let matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]];
let result = kthSmallestElementInMatrix(matrix, k);
console.log(result);