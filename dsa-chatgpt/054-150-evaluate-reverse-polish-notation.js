// 150. evaluate-reverse-polish-notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []

    for (let t of tokens) {
        if (t === '+' || t === '-' || t === '*' || t === '/') {

            const b = stack.pop()
            const a = stack.pop()

            let res = 0

            if (t === '+') res = a + b;
            else if (t === '-') res = a - b
            else if (t === '*') res = a * b
            else if (t === '/') res = Math.trunc(a / b)

            stack.push(res)
        } else {
            stack.push(Number(t))
        }
    }

    return stack.pop()
};
