// 238. product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        ans[i] = prefix
    }
    let suffix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = ans[i] * suffix
    }

    return ans
    let prefix = 1
        prefix = prefix * nums[i]
        suffix = suffix * nums[i]


};
