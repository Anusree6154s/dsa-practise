// Problem Description
// Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length, return the subarray with the lowest starting index.

// If there is no such sub-array print -1.

// Input format
// There are 2 lines of input.

// First line contains an integer N.

// Next line consists of N integers, the values of the array.

// Output format
// Print the elements of the sub-array with spaces which have the largest length and sum of elements equal to zero.

// Sample Input 1
// 6

// 2 3 1 -4 0 6

// Sample Output 1
// 3 1 -4 0

// Explanation
// The largest subarray with sum zero is (3, 1, -4, 0)

// Constraints
// 1 <= N <= 10^5

// -10^4 <= arr[i] <= 10^4

//tc=n, sc=n
function largestSubarraySumZero(n, arr) {
    let map = new Map()

    map.set(0, -1)
    let sum = 0
    let maxLength = 0
    let left = -1, right = -1
    let maxleft = -1, maxright = -1
    for (let i = 0; i < n; i++) {
        sum = sum + arr[i]
        if (map.has(sum)) {
            right = i
            left = map.get(sum)
            let length = right - left
            if (length > maxLength) {
                maxleft = left + 1 //excluding left duplicate which repeated
                maxright = right
                maxLength = length
            }
        } else {
            map.set(sum, i)
        }
    }

    if (maxleft == -1 || maxright == -1) {
        return [-1]
    }

    let result = []
    for (let i = maxleft; i <= maxright; i++) { //from excluded left to included right
        result.push(arr[i])
    }

    return result
}

const n = 6
const arr = [2, 3, 1, -4, 0, 6]
const longestSubarray = largestSubarraySumZero(n, arr)
console.log(longestSubarray.join(" "))