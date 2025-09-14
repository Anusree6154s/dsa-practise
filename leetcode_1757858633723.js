/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.prefix = new Array(nums.length - 1).fill(0);
    let sum = 0;
    for (let i = 0; i <= nums.length; i++) {
        sum += nums[i];
        this.prefix[i] = sum;
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    const leftPrefix = this.prefix[left - 1] || 0;
    return this.prefix[right] - leftPrefix;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */