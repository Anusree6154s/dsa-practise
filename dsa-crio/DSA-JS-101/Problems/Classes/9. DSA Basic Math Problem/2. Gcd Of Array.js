// Problem Description
// Given an array of numbers, find GCD of the array elements.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Input format
// First line contains n, the number integers.

// Second line contains n space separated integers.

// Output format
// Return the gcd of array.

// Sample Input 1
// 4

// 4 6 8 16

// Sample Output 1
// 2

// Explanation
// gcd(4,6,8,16) = 2, as 2 is the greatest number that divides all four numbers

// Constraints
// 2 <= n <= 10^3

// 1 <= nums[i] <= 10^3

//tc=nlog(n), sc=1
// the while loop takes tc=log(n), because % operation takes log(n) time to reduce n to 0
function gcdOfArray(n, arr) {
  //gcd of all elements in array = gcd between a gcd of 2 elements and the third element
  // gcd of 2 elements is the remainder of their division (I know, it is surprising)
  //eg: gcd(6, 15) = 15%6, gcd(a, b) = b%a
  // and if b%a===0, then gcd(a, b)=a. Eg: gcd(4, 8)=4
  // in recursive terms it means, if b%prevGcd!=0, newGcd = b%prevGcd , else newGcd = prevGcd

  let gcd = arr[0];
  for (let i = 1; i < n; i++) {
    let a = gcd;
    let b = arr[i];

    //gcd btw 2 elements is what results after continuosly dividng prev remainder with remainder until 0
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    gcd = a;
  }

  return gcd;
}

let n = 4;
let arr = [4, 6, 8, 16];
let res = gcdOfArray(n, arr);
console.log(res);

// function findGCD(arr) {
//   const gcd = (a, b) => {
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   };

//   let result = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     result = gcd(result, arr[i]);
//   }
//   return result;
// }
