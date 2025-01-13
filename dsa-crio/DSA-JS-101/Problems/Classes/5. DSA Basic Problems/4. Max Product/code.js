// Problem Description
// Given the array of integers nums of size n, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Input format
// First line contains n, the number of distinct integers.

// Second line contains n space separated integers

// Output format
// Print the maximum product.

// Sample Input 1
// 4
// 3 4 5 2

// Sample Output 1
// 12

// Explanation
// If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)(nums[2]-1) = (4-1)(5-1) = 3*4 = 12.


//tc =n, sc=1
function maxProduct2(n, nums) {
    // let product = 1

    let max1 = 0, max2 = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] >= max1) {
            max2=max1
            max1 = nums[i]
        } else {
            max2 = Math.max(max2, nums[i])
        }
    }
    return (max1-1)*(max2-1)

}

let n = 4
let nums = [3, 4, 5, 2]
let res = maxProduct2(n, nums);
console.log(res);