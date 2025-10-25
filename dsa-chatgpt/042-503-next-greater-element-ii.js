// 503. next-greater-element-ii

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length
    let ans = new Array(n).fill(-1)
    let stack = []

    // 2*n-1 for going twice around the array
    for (let i = 0; i < (2 * n - 1); i++) {
        let num = nums[i % n]
        while (stack.length && nums[stack[stack.length - 1]] < 
num) {
            ans[stack.pop()] = num
        }
        if (i < n) { //ony push to stack in the first round
            // around array
            stack.push(i)
        }
    }

    return ans
};
