// 238. product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = new Array(nums.length).fill(1)

    let prefix = 1
    for (let i = 0; i < nums.length; i++) {
        ans[i] = prefix
        prefix = prefix * nums[i]
    }


    let suffix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = ans[i] * suffix
        suffix = suffix * nums[i]
    }

    return ans
};
