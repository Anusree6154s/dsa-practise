// Problem Description
// Write a program that reverses a string.

// Sample Input 1
// abc

// Sample Output 1
// cba

// Explanation
// cba is reverse of abc.

// Constraints
// Print the reverse of the string in a single line.


function reverseresulting(str) {
    let result = str.split("") //tc=n
    let left = 0, right = result.length - 1
    while (left <= right) { //tc=n/2 =n
        [result[left], result[right]] = [result[right], result[left]]
        left++
        right--
    }
    return result.join("") //tc=n
}

let ans = reverseresulting("abc");
console.log(ans);

//tc=n, sc=1