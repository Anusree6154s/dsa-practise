// 560. subarray-sum-equals-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // 2 concepts: 
    // one is that prefix-targetsum = current prefix, then that mens currently 
this subarray sums to target sum
    // second is that we store all previous occurances of prefixes and their 
counts in map

    let count = 0
    let prefix = 0

    const map = new Map()
    map.set(0, 1) //base case : prefix sum 0 always exists, but count will be 0

    for (let n of nums) {
        prefix = prefix + n

        if (map.has(prefix - k)) {
            count = count + map.get(prefix - k)
        }

        map.set(prefix, (map.get(prefix) || 0) + 1)
    }

    return count


};
