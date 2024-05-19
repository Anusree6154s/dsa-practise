// Problem Description
// Given a number n, you have to calculate the factorial of that number.

// Input format
// First line contains an integer - n

// Output format
// Print the factorial of the given number.

// Sample Input 1
// 3

// Sample Output 1
// 6

// Explanation
// 3! = 3.2.1 = 6

// Constraints
// 0 <= n <= 10

//tc=n, sc=n
function factorialDSA(n) {
    if(n===1){
        return 1
    }

    let product = n * factorialDSA(n-1)
    return product
} 

let n = 3
const result = factorialDSA(n);
console.log(result)
 


