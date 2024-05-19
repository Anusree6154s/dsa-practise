// Problem Description
// Ujjwal loves to read story books. There are n piles of books, the ith pile has a[i] books. His mom has gone to market and will come back in h hours.

// Ujjwal can decide his books-per-hour reading speed of k. Each hour, he chooses some pile of books and reads k books from that pile. If the pile has less than k books, he reads all of them instead and will not read any more books during this hour.

// Ujjwal likes to read slowly but still wants to finish reading all the books before his mom returns.

// Return the minimum integer k such that he can read all the books within h hours.

// Input format
// First line contains n and h.

// Second line contains n space integers given by a[i].

// Output format
// A single integer k.

// Sample Input 1
// 4 8

// 3 6 7 11

// Sample Output 1
// 4

// Explanation
// The minimum books-per-hour reading speed is 4 such that ujjwal can read all the books within h hours.

function bookReading(n, h, a) {
    
 }

let [n, h] = [4,]
let a = [3, 6, 7, 11]

console.log(bookReading(n, h, a));