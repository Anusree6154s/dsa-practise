// Problem Description
// Given a sorted array consisting of 0s and 1s only, find the index of the first 1. If there’s no 1 present in the array, return -1

// Input format
// There are 2 lines of input

// First line will contain a single integer n.

// Next line will contain n space separated integers.

// Output format
// Print the index of first occuring if present, otherwise print -1.

// Sample Input 1
// 4

// 0 0 1 1

// Sample Output 1
// 2

// Constraints
// 1<=n<=100000

// 0<=Ai<=1


//tc=log n, sc=1
function zeroOnes(n, arr) {
    let left = 0
    let right = n - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] === 1 && arr[mid - 1] == 0) {
            return mid
        } else if (arr[mid] === 1) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}

let n = 4
let arr = [0, 0, 1, 1]

let firstIndex = zeroOnes(n, arr);
console.log(firstIndex);