// 1480. running-sum-of-1d-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let res = []
    let sum = 0
    for (let num of nums) {
        sum = sum + num
        res.push(sum)
    }
    return res
};
