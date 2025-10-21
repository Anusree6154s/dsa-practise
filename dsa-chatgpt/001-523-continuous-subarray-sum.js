// 523. continuous-subarray-sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // check if current prefix%k in map
    // if yes, check if i-map.get(prefix%k) >=2
    // if yes return true
    // else store prefix%k in map and next loop
    let prefix = 0
    const map = new Map([[0, -1]])// to handle subarrays starting at index 0
    for (let i = 0; i < nums.length; i++) {
        prefix = prefix + nums[i]
        const remainder = k === 0 ? prefix : prefix % k
        if (map.has(remainder)) {
            const prevRemIndex = map.get(remainder)
            const subarrayLen = i - prevRemIndex
            if (subarrayLen >= 2) return true
        } else {
            map.set(remainder, i)
        }
    }

    return false
};
