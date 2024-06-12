// Problem Description
// In Tribonacci sequence, the nth term Tn, is defined as follows:
// T0 = 0,
// T1 = 1,
// T2 = 1,
// and Tn = Tn-1 + Tn-2 + Tn-3 , for n >= 3.
// Overall the sequence looks like this - 0, 1, 1, 2, 4, 7, 13, 24, 44, 81 …
// Given n, return the value of Tn.

// Input format
// A single line containing an Integer, N.
// Output format
// The Nth integer in the tribonacci sequence.

// Constraints
// 0 <= n <= 15

// Sample Input 1
// 4

// Sample Output 1
// 4

// Explanation 1
// T3 = T2 + T1 + T0 = 1 + 1 + 0 = 2
// T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4


//tc= 3*n = n, sc=n
function tribonacci(n) {
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    if(n==2){
        return 1
    }


    let a = tribonacci(n - 1)
    let b = tribonacci(n - 2)
    let c = tribonacci(n - 3)

    let sum = a + b + c

    return sum

}
let n = 4
let result = tribonacci(n);
console.log(result);