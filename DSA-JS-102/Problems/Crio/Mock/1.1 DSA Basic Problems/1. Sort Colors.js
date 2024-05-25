// Portfolio


// 30+

// Anusree Anilkumar


// Problem Description
// Given an array arr with n objects colored red, white or blue,sort them in-place so that objects of the same color are adjacent,with the colors in the order red, white and blue.
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
// Note: You are not supposed to use the library's sort function for this problem.

// Input format
// First-line will contain the number of objects n.
// Next line will have n space-separated integers, specifically array arr.

// Output format
// A single line that contains the numbers in the sorted order.
// You don't need to return any vector or array just sort the given array it in-place.

// Sample Input 1
// 6
// 1 1 1 2 2 0

// Sample Output 1
// 0 1 1 1 2 2

// Explanation
// After sorting the given colored array arr we get 0 1 1 1 2 2.

// Constraints
// 1 <= n <= 100000

function sortColors(nums) {
    //implmenting insertion sort bexause among sorting methods instead of  merge and quick, because for small arrays, this one is best 
    
    for (let i = 1; i < nums.length; i++) {
        let currentValue = nums[i]; // The element to be inserted into the sorted part of the array
        let j = i - 1; // Start comparing with the last element in the sorted part

        // Shift elements of nums[0..i-1] that are greater than currentValue to one position ahead of their current position
        while (j >= 0 && nums[j] > currentValue) {
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]; // Swap the elements
            j--; // Move to the previous element in the sorted part
        }
    }

}

let nums = [1, 1, 1, 2, 2, 0]
sortColors(nums);
console.log(...nums);