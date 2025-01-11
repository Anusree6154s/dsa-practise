// Problem Description
// Given an array of n integers. Your task is to sort the array in ascending order using insertion sort technique.
// Return the sorted array.
// Note :- You need to sort array only using insertion sort.

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
// Here is how interstion sort will work on above array :-
// Initial Array: [12, 8, 3, 0, 7]

// First Pass (i=1): The first element, 12, is considered sorted. Move to the next element, 8, and insert it before 12. The array becomes [8, 12, 3, 0, 7].
// Second Pass (i=2): The first two elements, 8 and 12, are considered sorted. Move to the next element, 3, and insert it at the correct position. The array becomes [3, 8, 12, 0, 7].

// Third Pass (i=3): The first three elements are now considered sorted. Move to the next element, 0, and insert it at the correct position. The array becomes [0, 3, 8, 12, 7].

// Fourth Pass (i=4): The first four elements are now considered sorted. Move to the next element, 7, and insert it at the correct position. The final sorted array is [0, 3, 7, 8, 12].

// Constraints
// 1 <= n <= 10^3
// 0 <= a[i] <= 10^9

function insertionSort(n, arr) {
    // implement this function

    for (let i = 1; i < n; i++) {
        let currentValue = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > currentValue) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            j--
        }
    }

    return arr
}

let n = 5
let arr = [12, 8, 3, 0, 7]

let sortedArr = insertionSort(n, arr);

console.log(sortedArr.join(' ') );