// Problem Description
// Given an array, find a non-empty contiguous subarray with the largest sum.

// Input format
// There are 2 lines of input.

// First line contains N, the number of elements in the array.

// Second line contains N space separated numbers, representing the array elements.

// Output format
// A single integer which is the maximum possible contiguous subarray sum

// Constraints
// 1 ≤ N ≤ 10^5

// -10^9 ≤ A[i] ≤ 10^9

// Sample Input 1
// 8

// -2 -3 4 -1 -2 1 5 -3

// Sample Output 1
// 7

// Explanation 1
// The subarray [4 -1 -2 1 5] has sum 7, which is the maximum possible.

//-------
//obervatin - non empty contiguos array-  kadane's algorithm = arr with prefix sum not less than 0
//kadane's algo speciality -  considers -ve numbers too

//tc=n, sc=1
function contigiousSequence(n, arr) {
    //reset prefix sum when less than 0

    let maxSum = 0
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum = Math.max(arr[i], sum + arr[i]) //incase sum less than 0, sum restarts from arr[i]
        maxSum = Math.max(maxSum, sum) //the greater sum not than 0 is stored
    }

    return maxSum

}

let n = 8
let arr = [-2, -3, 4, -1, -2, 1, 5, -3]

let largestSum = contigiousSequence(n, arr);
console.log(largestSum);