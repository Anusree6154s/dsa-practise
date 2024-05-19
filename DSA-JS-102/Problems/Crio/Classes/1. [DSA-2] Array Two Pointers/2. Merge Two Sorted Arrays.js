//HARD
//Merge two sorted arrays

// Problem Description
// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Input format
// A single Integer M, that contains the number of elements in the first array.
// A single Integer N, that contains the number of elements in the second array.
// Next Line contains M space Integers of the array nums1.
// Next Line contains N space Integers of the array nums2.

// Output format
// Print the array after merging.

// Sample Input 1
// 3
// 3
// 1 2 3
// 2 5 6

// Sample Output 1
// 1 2 2 3 5 6

// Explanation 1
// The sorted array is returned after merging.

// Constraints
// 1 <= N,M <= 10^5
// |nums1[i] | <= 10^9
// |nums2[i] | <= 10^9

//tc=m+n, sc=m+n
function mergeSortedArray(m, nums1, n, nums2) {
  //already sorted arrays

  let p1 = 0,
    p2 = 0,
    p3 = 0;
  let result = [];

  while (p3 < m + n) {
    let num1 = nums1[p1] == 0 || nums1[p1] ? nums1[p1] : Infinity;
    let num2 = nums2[p2] == 0 || nums2[p2] ? nums2[p2] : Infinity;
    if (num1 < num2) {
      result.push(num1);
      p1++;
    } else if (num1 > num2) {
      result.push(num2);
      p2++;
    } else if (num1 === num2 && num1 !== Infinity && num2 !== Infinity) {
      result.push(num1);
      p1++;
    }
    p3++;
  }

  return result;
}

let nums = mergeSortedArray(3, [1, 2, 3], 3, [2, 5, 6]);
console.log(...nums);

//explanation
// 1 pointer for arr1, 1pointer for arr2 and 1 pointer for result Array
// we compare arr1[i] and arr2[i], and store the smaller number in result
//initialise arr1[i] as arr1[i], when p1 <arr1.length, else as Infinity (so that during comparison it is not stored since it is larger value)
// similarly for arr2,  arr2[i] till p2<arr2.length, later as Infinity

// in case arr1[i]===arr2[i], store any one (and arr1[i] and arr2[i] !== Infinity)
