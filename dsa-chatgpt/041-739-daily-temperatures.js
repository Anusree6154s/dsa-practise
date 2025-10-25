// 739. daily-temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [] //stack of indices to calculate day difference

    let ans = []
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 
1]] < temperatures[i]) {
            let dayDiff = i - stack[stack.length - 1]
            ans[stack.pop()] = dayDiff
        }
        stack.push(i)
    }

    while (stack.length) {
        ans[stack.pop()] = 0
    }

    return ans
};
