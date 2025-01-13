// Problem Description
// You are given a non-empty array of integers arr, where every element appears twice except for one. Your task is to implement a program that takes the input as an array of integers and returns the element that appears only once.

// Input format
// The input consists of an array of integers nums (1 <= arr.length <= 3 * 10^4), where each element in the array appears twice except for one element which appears only once. The elements in arr are within the range -3 * 10^4 to 3 * 10^4.

// You should use a HashMap-based approach to efficiently identify the element that appears only once in the array.

// Output format
// Return the integer that appears only once in the given array.

// Sample Input 1
// 3
// 2 2 1

// Sample Output 1
// 1

// Explanation
// In the given array, 1 appears only once, so the program should return 1.


//tc = n, sc=1
function findSingleNumber(arr) {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.delete(arr[i])
        } else {
            map.set(arr[i], 1)
        }
    }

    return map.keys().next().value
}
let N = 3
let arr = [2, 2, 1]
let res = findSingleNumber(arr);
console.log(res);