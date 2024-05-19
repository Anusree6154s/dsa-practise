// Problem Description
// A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. You must write an algorithm that runs in O(log n) time.

// Input format
// The first line contains an integer N, the size of the input array. The second line contains N integers, the elements of the given array.

// Output format
// Return a single integer, the index of the peak element in the array (0-based).

// Sample Input 1
// 4

// 1 2 3 1

// Sample Output 1
// 2

// Explanation
// 3 is a peak element and your function should return the index number 2.

// Constraints
// 1 <= nums.length <= 1000

// 1 <= nums[i] <= 2^31 - 1

// nums[i] != nums[i + 1] for all valid i

//tc=log n, sc=1
function peakElement(N, nums) {
    //by binary search
    let left = 0
    let right = N - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        let leftValue = nums[mid - 1] ? nums[mid - 1] : -Infinity
        let rightValue = nums[mid + 1] ? nums[mid + 1] : -Infinity
        if (leftValue < nums[mid] && nums[mid] > rightValue) {
            //if apt consition, return value
            return mid
        } else if (leftValue < nums[mid]) {
            //if only one condition satisfied, update left
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

const [N] = [4]
const nums = [1, 2, 3, 1]
console.log(peakElement(N, nums));