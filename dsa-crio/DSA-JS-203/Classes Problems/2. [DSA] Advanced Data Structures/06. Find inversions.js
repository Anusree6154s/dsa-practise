// Problem Description
// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

// Input format
// First line contains N, indicating the number of elements in the nums array.

// Next line contains N space separated integers.

// Output format
// Print N space separated integers, representing the counts array.

// Constraints
// 1 <= N <= 10^5

// |nums[i]| <= 10^5

// Sample Input 1
// 4

// 5 2 6 1

// Sample Output 1
// 2 1 1 0

// Explanation 1
// nums[0] is 5 → 2 and 1 are smaller, answer is 2

// nums[1] is 2 → 1 is smaller, answer is 1

// nums[2] is 6 → 1 is smaller, answer is 1

// nums[3] is 1 → there is no element smaller than 1, answer is 0

// Sample Input 2
// 5

// 3 1 3 1 4

// Sample Output 2
// 2 0 1 0 0

// Explanation 2
// nums[0] is 3 → 1 and 1 are smaller, answer is 2

// nums[1] is 1 → there is no element smaller than 1 to its right, answer is 0

// nums[2] is 3 → 1 is smaller, answer is 1

// nums[3] is 1 → there is no element smaller than 1 to its right, answer is 0

// nums[4] is 4 → there is no element smaller than 4 to its right answer is 0



/**
 * @param {number[]} nums
 * @return {number[]}
 */

class Solution {
    countSmaller(nums) {
        function mergeSort(enumArr) {
            if (enumArr.length <= 1) {
                return enumArr;
            }
            const mid = Math.floor(enumArr.length / 2);
            const left = mergeSort(enumArr.slice(0, mid));
            const right = mergeSort(enumArr.slice(mid));
            return merge(left, right);
        }

        function merge(left, right) {
            let i = 0, j = 0, merged = [];
            while (i < left.length || j < right.length) {
                if (j === right.length || (i < left.length && left[i][1] <= right[j][1])) {
                    counts[left[i][0]] += j; // Count how many elements from right are smaller
                    merged.push(left[i]);
                    i++;
                } else {
                    merged.push(right[j]);
                    j++;
                }
            }
            return merged;
        }

        let counts = new Array(nums.length).fill(0);
        let enumArr = nums.map((num, index) => [index, num]);
        mergeSort(enumArr);
        return counts;
    }
}