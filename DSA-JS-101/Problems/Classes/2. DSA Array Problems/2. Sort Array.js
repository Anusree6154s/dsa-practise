// Problem Description
// Given an array of n strings. Sort the array in lexicographical order.

// Sample Input 1
// 4

// abc abd ab a

// Sample Output 1
// a ab abc abd

// Explanation
// The given array is sorted in lexicographical order.

function sortArray(arr) {
    return arr.sort()
}

let result = sortArray(['abc', 'abd', 'ab', 'a']);
console.log(...result);