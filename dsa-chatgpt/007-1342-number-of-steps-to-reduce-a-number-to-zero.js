// 1342. number-of-steps-to-reduce-a-number-to-zero

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let steps = 0

    while (num > 0) {
        if (num % 2 == 0) {
            num = Math.floor(num / 2)
        } else {
            num = num - 1
        }
        steps++
    }
    return steps
};
