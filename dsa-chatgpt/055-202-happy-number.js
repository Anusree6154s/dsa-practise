// 202. happy-number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    // if n is 1 means happy number
    // if n keeps repeating, then unhappy number

    let set = new Set()
    while (n !== 1) {
        if (set.has(n)) return false
        set.add(n)
        n = sumOfSquares(n)
    }


    return true
};

function sumOfSquares(num) {
    let sum = 0
    while (num > 0) {
        let digit = num % 10
        sum = sum + (digit * digit)
        num = Math.floor(num / 10)
    }
    return sum
}


