// 496. next-greater-element-i

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // Find next greater for every elment in nums2 
    // (and store in map)
    // Stack only keeps elements for which next greater 
    // has not been found
    // Then only pick the next greaters for elements in nums1

    let stack = []
    let map = {}

    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map[stack.pop()] = num
        }
        stack.push(num)
    }

    while (stack.length) {
        map[stack.pop()] = -1
    }

    return nums1.map(num => map[num])
};
