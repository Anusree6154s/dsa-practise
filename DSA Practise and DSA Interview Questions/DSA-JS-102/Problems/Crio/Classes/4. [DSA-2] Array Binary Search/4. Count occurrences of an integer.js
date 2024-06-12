// Problem Description
// Given a sorted integer array of length n with possible duplicate elements. Find the number of occurrences of an integer k using binary search.

// Input format
// There are 2 lines of input.

// First line contains 2 space separated integers n, k - Number of elements, the integer k.

// Second line contains n space separated integers - The integer array.

// Output format
// Print the number of occurrences of the integer k.

// Sample Input 1
// 5 2

// -1 2 2 4 7

// Sample Output 1
// 2

// Explanation 1
// The integer 2 occurs 2 times in the given array.

// Constraints
// 1 <= n <= 10^6

// -10^9 <= k <= 10^9

// -10^9 <= A[i] <= 10^9

//tc=log n, sc=1
function countOccurrences(n, k, arr) {
    //using binary search only. no iteration anywhere

    //for finding start
    let mid1 = -1
    let left = 0
    let right = n - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)

        if (arr[mid] === k && arr[mid - 1] !== k) {
            mid1 = mid
            break
        } else if (arr[mid] < k) {
            left = mid + 1
        } else {
            right = mid + 1
        }
    }

    //for finding end
    let mid2 = -1
    left = 0
    right = n - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)

        if (arr[mid] === k && arr[mid + 1] !== k) {
            mid2 = mid
            break
        } else if (arr[mid] <= k) {
            left = mid + 1
        } else {
            right = mid + 1
        }
    }

    return mid2 - mid1 + 1
}

let [n, k] = [5, 2]
let arr = [-1, 2, 2, 4, 7]

let ans = countOccurrences(n, k, arr);
console.log(ans);