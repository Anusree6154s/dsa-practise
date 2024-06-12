// Problem Description
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Input format
// The first line of input contains N, which denotes the number of elements in the array.

// The next line of input contains N distinct array elements in the range [0, n].

// Output format
// Return the only number in the range that is missing from the array.

// Sample Input 1
// 4

// 3 0 2 4

// Sample Output 1
// 1

// Explanation
// n = 4 since there are 4 numbers, so all numbers are in the range [0,4].

// 1 is the missing number in the range since it does not appear in nums.

// Constraints
// 1 <= n <= 10000

// 0 <= nums[i] <= n

// All the numbers of nums are unique.

//tc=n, sc=1
function singleMissingNumber(N, A) {
    // logic- when we subtract sum of n integers and the sum of array elements
    // we get the missing number

    let sum1 = N * (N + 1) / 2 //sum of intergers 0 to n
    let sum2 = 0
    for (let num of A) {
        sum2 = sum2 + num
    }

    return sum1 - sum2
}

const [N] = [4]
const A = [3, 0, 2, 4]
console.log(singleMissingNumber(N, A));