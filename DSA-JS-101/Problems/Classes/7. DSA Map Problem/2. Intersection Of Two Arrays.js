// Problem Description
// Given two arrays A and B, write a function to compute their intersection.
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result needs to be in sorted order.

// Input format
// First line contains one integer N denoting the number of elements in array A
// Next line contains N integers denoting the elements of array A
// Next line contains one integer M denoting the number of elements in array B
// Next line contains M integers denoting the elements of array B

// Output format
// Single line containing the intersection elements of the two arrays in sorted order.

// Sample Input 1
// 4
// 1 2 2 1
// 2
// 2 2

// Sample Output 1
// 2 2

// Explanation 1
// Since 2 2 are the only elements present in both the arrays.

// tc=n + m, sc=n+k
// = map length, arr length
//k =ans length
function intersectionOfTwoArrays(n, nums1, m, nums2) {
  let ans = [];

  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(nums1[i])) {
      let count = map.get(nums1[i]);
      map.set(nums1[i], ++count);
    } else {
      map.set(nums1[i], 1);
    }
  }

  for (let i = 0; i < m; i++) {
    if (map.has(nums2[i])) {
      let count = map.get(nums2[i]);
      map.set(nums2[i], --count);

      if (count >= 0) {
        ans.push(nums2[i]);
      }
    }
  }

  ans.sort((a, b) => a - b);
  return ans;
}

let n = 4;
let nums1 = [1, 2, 2, 1];
let m = 2;
let nums2 = [2, 2];
let ans = intersectionOfTwoArrays(n, nums1, m, nums2);
console.log(...ans);
