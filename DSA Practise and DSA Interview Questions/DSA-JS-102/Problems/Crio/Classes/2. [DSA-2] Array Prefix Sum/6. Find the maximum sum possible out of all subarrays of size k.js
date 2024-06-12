// Problem Description
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input format
// First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

// Second line of input contains N integers denoting the array elements.

// Output format
// Print the maximum sum of a subarray of size k.

// Sample Input 1
// 4 2

// 100 200 300 400

// Sample Output 1
// 700

// Explanation
// We get maximum sum by adding subarray {300,400}

// of size 2.

// Constraints
// 1<=K<=N<=100000

// 0<=abs(arr[i])<=10000

//fixed size window problem - idk why im not using while loop
//tc=n, sc=1
function maximumSubarraySumSizeK(N, A, K) {
    let sum = 0

    //find the initial sum for the first window
    for (let i = 0; i < K; i++) {
        sum = sum + A[i]
    }

    //find max sum out of all sums by slliding window now
    //means, each time right is ++ and left is --, window slides
    let maxSum = sum
    for (let right = K; right < N; right++) {
        let leftValue = A[right - K]
        sum = sum + A[right] - leftValue
        maxSum = Math.max(sum, maxSum)
    }


    return maxSum
}
const [N, K] = [4, 2]
const A = [100, 200, 300, 400]
console.log(maximumSubarraySumSizeK(N, A, K));