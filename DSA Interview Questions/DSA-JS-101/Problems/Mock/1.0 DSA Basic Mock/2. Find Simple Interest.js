// Problem Description
// Write a program to calculate the simple interest based on the given principal amount, rate of interest, and time period.

// The formula to calculate simple interest is as follows:

// Simple Interest = (Principal × Rate × Time) / 100

// ​

// Input format
// The input consists of three space-separated integers on a single line:

// P (Principal amount)

// R (Rate of interest)

// T (Time period in years)

// Output format
// The program should output a single floating-point number representing the calculated simple interest, rounded to two decimal places.

// Sample Input 1
// 1000 5 2

// Sample Output 1
// 100.00

// Explanation
// For a principal amount of 1000, a rate of interest of 5%, and a time period of 2 years, the simple interest is calculated as follows:

// Simple Interest = (1000×5×2)/100 = 100.00

//tc=1, sc=1
function simpleInterest(P, R, T) {
    return (P * R * T) / 100
}

let [P, R, T] = [1000, 5, 2];
const ans = simpleInterest(P, R, T);
console.log(ans.toFixed(2));
