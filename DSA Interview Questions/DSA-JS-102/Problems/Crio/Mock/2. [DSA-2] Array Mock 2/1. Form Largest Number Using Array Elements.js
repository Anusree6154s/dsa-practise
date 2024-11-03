// Problem Description
// Given an array of non negative integers, arrange the elements, such that if made into a number, they form the largest number.

// For instance,

// Given the array [1, 3, 10] , this should be arranged to [3, 1, 10] - since the largest possible number formed by these numbers is 3110.

// Input format
// There are 2 lines of input

// First-line contains n, the size of the array.

// Next line contains n space-separated integers.

// Output format
// Print the largest number formed by arranging these numbers in the list.

// Sample Input 1
// 2

// 10 2

// Sample Output 1
// 210

// Sample Input 2
// 5

// 3 30 34 5 9

// Sample Output 2
// 9534330

// Constraints
// 0<= n <=50000

// 0<= a[i] <= 10^4

function largestNumber(arr) {
    // we need to do lexicographical decreasing sorting of numbers in an array
    // convert both numbers to string and them compare those strings
    //return string2-string1 for descending order
    arr.sort((a, b)=>{
        let num1=a.toString()+b.toString()
        let num2=b.toString()+a.toString()
        return num2-num1
      })
      return arr.join("")
}


let arr = [3, 30, 34, 5, 9]
const result = largestNumber(arr);
console.log(result);