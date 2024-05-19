// Problem Description
// You are given an array arr. You need to sort the array arr using quick sort.
// Note :- You should sort the array arr using quick sort only.

// Input format
// First line will contain a single integer N.
// Second line will contain N space separated integers representing array elements.

// Output format
// Output the array space separated in a single line or simply return a sorted array.

// Sample Input 1
// 5 4 3 1 2 5

// Sample Output 1
// 1 2 3 4 5

// Explanation
// Taking an array like [5, 4, 3, 1, 2], Quick Sort begins by choosing a pivot, often the last element, and partitions the array by rearranging elements on either side of the pivot.
// Recursive calls are then applied to the subarrays. For instance, in the given array, the pivot 2 is chosen, leading to the partitioned array [1, 2, 3, 5, 4].
// Further recursive calls and pivot selections result in a sorted array [1, 2, 3, 4, 5].

// Constraints
// 1 <= N <= 100000
// 1 <= arr[i] <= 10000000


//tc=n log n, sc=n
function quickSort(n, arr) {
    //find a pivot element (mid element)
    //seperate elements into right array and left array if < or > pivot element
    //quicksort left and right
    //merge both sortedRight and sortedLeft arrays and return that array

    if (n < 2) {
        return arr
    }

    let pivot = Math.floor(arr.length / 2)
    let pivotEle = arr[pivot]

    let left = []
    let right = []
    for (let i = 0; i < n; i++) {
        if (arr[i] < pivotEle) {
            left.push(arr[i])
        } else if (arr[i] > pivotEle) {
            right.push(arr[i])
        }
    }

    let sortedLeft = quickSort(left.length, left)
    let sortedRight = quickSort(right.length, right)

    let merged = [...sortedLeft, pivotEle, ...sortedRight]
    return merged

}

let n = 6
let arr = [5, 4, 3, 1, 2, 5]
let result = quickSort(n, arr);
console.log(...result);

//QUICKSORT TEMPLATE
// function quicksort(arr) {
//     // Base case: arrays with less than 2 elements are already "sorted"
//     if (arr.length < 2) {
//         return arr;
//     }

//     // Step 1: Select a pivot element (we'll use the middle element here)
//     const pivotIndex = Math.floor(arr.length / 2);
//     const pivot = arr[pivotIndex];

//     // Step 2: Partition the array into two subarrays
//     // - elements less than the pivot
//     // - elements greater than or equal to the pivot
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === pivotIndex) continue; // Skip the pivot element
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     // Step 3: Recursively apply quicksort to the left and right subarrays
//     return [...quicksort(left), pivot, ...quicksort(right)];
// }

// // Example usage
// const array = [3, 6, 8, 10, 1, 2, 1];
// const sortedArray = quicksort(array);
// console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
