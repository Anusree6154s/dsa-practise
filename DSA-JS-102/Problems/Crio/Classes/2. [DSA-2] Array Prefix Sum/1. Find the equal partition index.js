// Problem Description
// Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

// Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

// Return the index of the partitioning element. If no such element exists, return -1.

// Input format
// There are N+1 lines of input.

// First line will contain a single integer N.

// Second line will contain n space separated integer representing array elements.

// Output format
// Output the index of the partitioning element.

// Constraints
// 2 <= N <= 10^6

// 1 <= Arr[i] <= 10^9

// Sample Input 1
// 4

// 1 4 2 5

// Sample Output 1
// 2

// Explanation 1
// Since 1 + 4 = 5 where 2 is such an element.

//tc=n, sc=n
function equalPartition(n, arr) {

    if (n == 1 || n == 0) {
        return 0
    }

    //calculate sum 
    let prefix = []
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum = sum + arr[i]
        prefix.push(sum)
    }

    //for values of prefix, find at which position prefix an dsuffix is equal
    for (let i = 0; i < n; i++) {
        //prefix[i] + suffix[i] = sum+a[i]
        //suffix= sum+arr[i]-prefix
        let suffix = sum + arr[i] - prefix[i]
        if (prefix[i] === suffix) {
            return arr[i]
        }
    }

    return -1
}

let n = 4
let arr = [1, 4, 2, 5]

let partitionIndex = equalPartition(n, arr);
console.log(partitionIndex);

//edge case
//if arr length =0
//if arr has 1 element - in this qn it is supposed to return 0 in that case