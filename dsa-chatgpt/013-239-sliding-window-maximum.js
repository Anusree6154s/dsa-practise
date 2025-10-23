// 239. sliding-window-maximum



    for (let i = 0; i < nums.length; i++) {
        if (indexDeque.length && indexDeque[0] <= i - k) {
            indexDeque.shift()
        }

        while (indexDeque.length && nums[indexDeque[indexDeque.
length - 1]] < nums[i]) {
            indexDeque.pop()
        }

        indexDeque.push(i)


        if (i >= k - 1) {
            res.push(nums[indexDeque[0]])
        }
        // pop all smaller elements
        // shift first elemt smaller than window
        // push latest elem
        // push first elem of deque into result each window 
        // (it is the max value per window)
    const indexDeque = []
    const res = []
var maxSlidingWindow = function (nums, k) {
 * @return {number[]}
 */
 * @param {number} k
 * @param {number[]} nums
/**
