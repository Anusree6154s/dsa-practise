// Problem Description
// Write a program to find the peaks in the sequence.

// An element is a peak element if it is greater than its neighbors (a[i] > a[i-1] AND a[i] > a[i+1]).

// For the leftmost element, only check the element to the right of it (a[0] > a[1]). Similarly, for the rightmost element, only check the element to the left of it (a[n-1] > a[n-2]).

// Below is an example, Input: Arr[] = [10,5,6,3,4,8,9,15] Output: [10,6,15]

// Sample Input 1
// 7
// 4 2 3 1 5 6 4

// Sample Output 1
// 4 3 6

// Explanation
// Here, 4 is a local peak as 4 > 2 and there is no integer left of 4

// 3 is a local peak as 3 > 2 and 3 > 1

// 6 is a local peak as 6 > 5 and 6 > 4

// Constraints
// 1 <= N <= 10^5

// 1 <= arr[i] <= 10^9

function findLocalPeak(N, arr) {
    //array of local peaks
let result=[]
    for(let i=0; i<N; i++){
        let prevEle = arr[i-1]? arr[i-1]:-Infinity
        let nextEle = arr[i+1]? arr[i+1]: -Infinity
        if(nextEle<arr[i] && prevEle<arr[i]){
            result.push(arr[i])
        }

    }

    return result
}

let ans = findLocalPeak(7, [4, 2, 3, 1, 5, 6, 4]);
console.log(ans.join(" "))

// tc=n, sc=n