/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // check if current prefix%k in map
    // if yes, check if i-map.get(prefix%k) >=2
    // if yes return true
    // else store prefix%k in map and next loop
