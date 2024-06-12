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

//tc=mlog n, sc=1
//m=for loop
//n largest pile in array
function bookReading(n, h, a) {
    //min hours = a.length 
    //we make a new array arr and redistribute contents of a, so that the arr.length<=8

    //contents of each arr[i] = Math.ceil(a[i]/speed) 
    //-> because arr[i]=time and speed=books/t, 
    //-.transposing we get time=books/speed
    //-> arr[i]=a[i]/speed


    // we will find for speed between 1 to max(...a)
    //finding the max no.of books per pile that finishes in <=h hours

    let left = 1
    let right = Math.max(...a)
    let mid = h //starting mid from h optimises the code a lot
    while (left <= right) {
        let totalHours = 0
        for (let i = 0; i < a.length; i++) {
            let pileOfBooks = a[i]
            let speed = mid
            let hours = Math.ceil(pileOfBooks / speed)
            totalHours = totalHours + hours
        }

        if (totalHours <= h) {
            right = mid - 1 //to find a smaller pile, aka, longer time-> time tending to h

        } else {
            left = mid + 1 //find a larger pile, aka, time<h
        }
        mid = Math.floor((right + left) / 2)
    }
    return left
}



let [n, h] = [4, 8]
let a = [3, 6, 7, 11]

console.log(bookReading(n, h, a));