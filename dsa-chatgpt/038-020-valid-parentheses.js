// 020. valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // you dont push both opening and closing brackets
    // you only push opening brackets and check if the upcoming 
brackets are in same order
    // once we get a matching pair we remove its related openng 
bracket from the stack
    // if in the end the stack is empty then all were in order
    let obj = {'(':')', '{':'}', '[':']'}
    let stack = []

       for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0 || obj[stack[stack.length - 1]] 
!== s[i]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length===0
};
