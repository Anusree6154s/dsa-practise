// Problem Description
// Given an array of n integers. Your task is to sort the array in ascending order using merge sort technique.
// Return the sorted array.
// Note :- You need to sort array only using merge sort.

// Input format
// First line contains a single integer n - the number of elements present in the array.
// Second line contains n space separated integers.

// Output format
// Print n space separated integers in sorted order or simply return a sorted array.

// Sample Input 1
// 5
// 12 8 3 0 7

// Sample Output 1
// 0 3 7 8 12

// Explanation
// Applying Merge Sort to the array [12, 8, 3, 0, 7] involves dividing it into two halves: [12, 8] and [3, 0, 7]. Recursively sorting each half results in [8, 12] and [0, 3, 7].
// The final step merges these sorted halves, creating the sorted array [0, 3, 7, 8, 12].

// Constraints
// 1 <= n <= 10^5
// 0 <= a[i] <= 10^9

//tc=n logn , sc=n
function mergeSort(n, arr) {
    //partition arr into left and right
    //recursive partition left and sort
    //mergesort left and right
    //return merged array

    if (n < 2) {
        return arr
    }

    let mid = Math.floor(n / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, n)

    let sortedLeft = mergeSort(left.length, left)
    let sortedRight = mergeSort(right.length, right)

    let mergedArray = merge(sortedLeft, sortedRight)

    return mergedArray
}

function merge(left, right) {
    let result = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else if (right[j] < left[i]) {
            result.push(right[j])
            j++
        } else {
            result.push(left[i])
            result.push(right[j])
            i++
            j++
        }
    }

    while (i !== left.length) {
        result.push(left[i])
        i++
    }

    while (j !== right.length) {
        result.push(right[j])
        j++
    }

    return result
}

let n = 5
let arr = [12, 8, 3, 0, 7]

let sortedArray = mergeSort(n, arr);
console.log(sortedArray.join(' '))