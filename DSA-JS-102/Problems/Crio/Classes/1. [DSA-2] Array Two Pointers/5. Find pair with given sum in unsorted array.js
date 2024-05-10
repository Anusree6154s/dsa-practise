//EASY 
//Two Sum Problem

// Problem Description
// Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.

// Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.

// Print the indices in increasing order.

// Sample Input 1
// 5 --> Number of elements in array
// 2 4 5 9 8 --> Array elements
// 7 --> Target sum value

// Sample Output 1
// 0 2

// Explanation 1
// Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen

function twoSum(nums, target) {
    let left = 0, right = nums.length - 1

    while (left <= right) {
        let sum = nums[left] + nums[right]

        if (sum === target) {
            if (nums[left] < nums[right]) {
                return [left, right]
            } else {
                return [right, left]
            }
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
}

let result = twoSum([2, 4, 5, 9, 8], 7);
console.log(result[0], result[1]);

//explanation
//edge case:
    //the anser to be printed in sorted order
    //answer to be printed as an array
