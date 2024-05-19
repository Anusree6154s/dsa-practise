// Problem Description
// Find the minimum difference possible between any two elements in the given array.

// Input format
// There are 2 lines of input.

// First line will contain a single integer n representing the size of the array.

// Second line will contain n space separated integers representing the array.

// Output format
// Output the answer in single line.

// Sample Input 1
// 3

// 1 2 4

// Sample Output 1
// 1

// Explanation 1
// 2 - 1 = 1 minimum difference

// Constraints
// 2<=n<=100000

// 1<=A[i]<=1000000000


//to find the difference between all pairs, not just the adjacent one
// sort and iterate, else tc will be n^2 without sorting
function minDiff(n, arr) {
    arr.sort((a, b) => a - b)

    let min = Infinity
    for (let i = 0; i < n - 1; i++) {
        let diff = arr[i + 1] - arr[i]
        min = Math.min(min, diff)
    }

    return min
}

let n = 3
let arr = [1, 2, 4]

let minimumDifference = minDiff(n, arr);
console.log(minimumDifference)