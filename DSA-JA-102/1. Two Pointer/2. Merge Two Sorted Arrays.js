// Problem Description
// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Input format
// A single Integer M, that contains the number of elements in the first array.
// A single Integer N, that contains the number of elements in the second array.
// Next Line contains M space Integers of the array nums1.
// Next Line contains N space Integers of the array nums2.

// Output format
// Print the array after merging.

// Sample Input 1
// 3
// 3
// 1 2 3
// 2 5 6

// Sample Output 1
// 1 2 2 3 5 6

// Explanation 1
// The sorted array is returned after merging.

// Constraints
// 1 <= N,M <= 10^5
// |nums1[i] | <= 10^9
// |nums2[i] | <= 10^9

function mergeSortedArray(m, nums1, n, nums2) {
    //already sorted arrays

    let p1 = 0, p2 = 0, p3 = 0
    let result = []

    while (p3 < (m+n)) {
        let num1=(nums1[p1]==0 || nums1[p1])? nums1[p1]: Infinity
        let num2=(nums2[p2]==0 || nums2[p2])? nums2[p2]: Infinity
        if (num1<num2){
            result.push(num1)
            p1++
        } else if(num1>num2){
            result.push(num2)
            p2++
        } else if(num1===num2 && num1!==Infinity && num2!==Infinity){
            result.push(num1)
            p1++
        }
        p3++
    }

    return result

}

let nums = mergeSortedArray(3, [1, 2, 3], 3, [2, 5, 6]);
console.log(...nums);