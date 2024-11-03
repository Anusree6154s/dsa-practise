// Problem Description
// Given an array of integers, write a program to find the sum of the minimum and maximum values of the array.

// Input format
// First line contains an integer N, the size of the array

// Second line contains the integers present in the array

// Output format
// Return expected integer

// Sample Input 1
// 5
// 10 15 4 5 19

// Sample Output 1
// 23

// Explanation
// The minimum and maximum values of the array are 4 and 19 respectively, totaling 23

//tc = n, sc = 1
function minMaxArray(N, arr) {
  //   arr.sort((a, b) => a - b); //tc=nlog(n)

  let max = -Infinity,
    min = Infinity;
  for (let i = 0; i < N; i++) {
    max = Math.max(max, arr[i]);
  }

  for (let i = 0; i < N; i++) {
    min = Math.min(min, arr[i]);
  }
  return max + min;
}

let N = 5;
let arr = [10, 15, 4, 5, 19];
let ans = minMaxArray(N, arr);
console.log(ans);
