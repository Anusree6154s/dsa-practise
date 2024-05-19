// Problem Description
// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Input format
// A 32 bit integer N

// Output format
// A single integer

// Sample Input 1
// 12

// Sample Output 1
// 21

// Explanation
// There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

// Constraints
// 0<= N <= 10^9

//tc= n logn, sc=n
//n=number of digits
function nextGreaterElementWithSameSetOfDigits(n) {
    let ans = n.toString().split("")
    //for 1 digit numbers
    if (ans.length == 1) {
        return -1
    }

    //to find swappoing position, aka, break point
    let breakpoint = -1
    for (let i = ans.length - 2; i >= 0; i--) {
        if (ans[i + 1] > ans[i]) {
            breakpoint = i
            break
        }
    }

    //in case there is a breakpoint, that is the ans is not sorted decreasingly throughout
    if (breakpoint !== -1) {
        let value = ans[breakpoint + 1]
        let position = breakpoint + 1
        for (let j = breakpoint + 2; j < ans.length; j++) {
            // to find value smaller than other values but still bigger than ans[i]
            if (ans[j] < value && ans[j] > ans[breakpoint]) {
                value = ans[j]
                position = j
            }
        }

        //swap the values
        [ans[position], ans[breakpoint]] = [ans[breakpoint], ans[position]]

        //sort rest of the array after the swapped position
        let rest = ans.splice(breakpoint + 1, ans.length)
        rest.sort((a, b) => a - b)
        ans = ans.concat(rest)
        return Number(ans.join(""))
    }


    return -1
}

const n = 74751
console.log(nextGreaterElementWithSameSetOfDigits(n));