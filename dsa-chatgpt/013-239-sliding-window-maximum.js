// 239. sliding-window-maximum


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const indexDeque = []
    const res = []


    for (let i = 0; i < nums.length; i++) {
        // shift first elemt smaller than window
        if (indexDeque.length && indexDeque[0] <= i - k) {
            indexDeque.shift()
        }

        // pop all smaller elements
        while (indexDeque.length && nums[indexDeque[indexDeque.length - 1]] < nums[i]) {
            indexDeque.pop()
        }

        // push latest elem
        indexDeque.push(i)


        // push first elem of deque into result each window 
        // (it is the max value per window)
        if (i >= k - 1) {
            res.push(nums[indexDeque[0]])
        }
    }

    return res
};