// Problem Description
// Given an array of n elements and an integer x, find the index where x is present in the array. If there are multiple occurrences, find the leftmost one. If x is not present, return -1.

// Sample Input 1
// 5

// 1 3 4 2 1

// 1

// Sample Output 1
// 0

// Explanation 1
// 1 is present at 0 and 4 indexes and the leftmost index is 0.

function findElement(n, arr, x) {
    //linear search
    for(let i=0; i<n; i++){
        if(arr[i]===x){
            return arr[i]
        }
    }

    return -1

}
let result = findElement(5, [1, 3, 4, 2, 1], 1);
console.log(result);