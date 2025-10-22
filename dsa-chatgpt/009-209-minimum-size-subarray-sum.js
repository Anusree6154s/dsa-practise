// 209. minimum-size-subarray-sum

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    //     We keep expanding the right end of the 
    // window to increase the sum,
    // and when the sum ≥ target, we shrink
    //  from the left to minimize length.

    let sum = 0
    let left = 0
    let minLen = Infinity
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        while (sum >= target) {
            minLen = Math.min(minLen, i - left + 1)
            sum = sum - nums[left]
            left++
        }
    }

    return minLen === Infinity ? 0 : minLen
};
