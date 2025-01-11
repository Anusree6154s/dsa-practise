// Problem Description
// You are given two strings and an integer k,find whether the given two strings are similar or not. Two given strings s1 and s2 are similar if for each character the difference between the frequency of that character in s1 and s2 is at most k. If the given strings are similar then print Yes otherwise print No. (Note : Both strings s1 and s2 are in lowercase )

// Input format
// First line contains an integer T - Number of test cases.

// The first line of each test case contains three integers N, M and K where N is the length of the first string, M is the length of the second string.

// The second line of each test case contains a string s1.

// The third line of each test case contains a string s2.

// Output format
// For each test case, print Yes if the given strings are Similar or No if the given strings are not similar.

// Sample Input 1
// 2

// 5 3 2

// aaabc

// abc

// 12 3 3

// xyzzzbbbbbxx

// bxy

// Sample Output 1
// Yes

// No

// Explanation
// In the first test case, the difference between each and every characters frequency in both the strings is at most 2. Hence, they are similar strings.

// In the second test case, the difference between the frequency of letter b in first string and the frequency of letter b in second string is 4. Hence, they are not similar strings.

// Constraints
// 1 <= T <= 100

// 1 <= N,M <= 100000

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k 
 * @param {String} s1
 * @param {String} s2 
 * @return {String}
 */
function similarString(n, s1, m, s2, k) {
    // Initialize frequency arrays for both strings
     const freq1 = new Array(26).fill(0);
     const freq2 = new Array(26).fill(0);
 
     // Calculate the frequency of each character in s1
     for (let i = 0; i < n; i++) {
         freq1[s1.charCodeAt(i) - 97]++;
     }
 
     // Calculate the frequency of each character in s2
     for (let i = 0; i < m; i++) {
         freq2[s2.charCodeAt(i) - 97]++;
     }
 
     // Compare the frequencies
     for (let i = 0; i < 26; i++) {
         if (Math.abs(freq1[i] - freq2[i]) > k) {
             return "No";
         }
     }
 
     return "Yes";
 }