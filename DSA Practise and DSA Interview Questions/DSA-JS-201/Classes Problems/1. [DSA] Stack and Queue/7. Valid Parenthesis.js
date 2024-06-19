// Problem Description
// Given a string S containing the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// For an input string to be valid:

// Open brackets must be closed by the same type of brackets.( can be closed by ) only

// Open brackets must be closed in the correct order. ([]) is valid, ([)] is not.

// Note: An empty string is also considered valid.

// Input format
// One line containing a string with a bracket sequence.

// Output format
// Return "true" if balanced, false otherwise.

// Constraints
// 0 <= | S | <= 10^5

// Sample Input 1
// ()[]{}

// Sample Output 1
// true

// Explanation 1
// The given sequence of brackets is valid as per the rules specified.

// Sample Input 2
// ([)]

// Sample Output 2
// false

// Explanation 2
// The given sequence of brackets is invalid as per the rules specified.

//tc=O(s), sc=O(s)-> in case all of s is open brackets
function validParenthesis(s) {
    //so we go by the principle :
    //push open bracket if seen
    // pop the open bracket, if a closed bracket is seen
    //(if the popped bracket is not one among the three opne brackte, aka. a closed bracket, then return false )

    //so basically true unless a closed bracket is popped


    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };


    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i])
        } else if (stack.length == 0 || stack.pop() !== matchingBrackets[s[i]]) {
            //if the popped open bracket doesnt have a pair in matchingBrackets object, then return false
            return false
        }
    }

    return true
}

console.log(validParenthesis('()[]{}'))