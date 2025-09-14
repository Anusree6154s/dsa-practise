/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.prefix = new Array(nums.length - 1).fill(0);
    let sum = 0;
    for (let i = 0; i <= nums.length; i++) {
        sum += nums[i];
        this.prefix[i] = sum;
