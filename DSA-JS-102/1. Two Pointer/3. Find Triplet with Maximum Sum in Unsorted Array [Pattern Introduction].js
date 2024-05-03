// Problem Description
// Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

// Input format
// There are 2t+1 lines of input

// First line contains an integer t - No of test cases.

// First line of each test case contains an integer n - No of elements in the array.

// Second line of each test case contains N space separated integers - The array nums.

// Output format
// For each test case print the answer in a new line.

// Sample Input 1
// 3

// 7

// 3 7 4 2 5 7 5

// 4

// 5 2 4 5

// 3

// 3 2 1

// Sample Output 1
// 16

// 11

// 0

function maxSumTriplet(n, nums) {
    let left=0, right=2
    let mid = 1
    let result = 0

    while (mid < n) {
        for(let i=0; i<mid; i++){
            if(nums[i]>nums[left] && nums[i]<nums[mid]){
                left =i
            }
        }
        for(let i=mid+1; i<n; i++){
            if(nums[i]>nums[right] && nums[i]>nums[mid]){
                right =i
            }
        }

        sum = nums[left] + nums[right] + nums[mid]
        if (sum > result && nums[left] < nums[mid] && nums[mid] < nums[right]) {
            result = sum
        }
        
        mid++
    }

    return result
}

let ans = maxSumTriplet(7, [3, 7, 4, 2, 5, 7, 5]);
console.log(ans);