// Problem Description
// Count the number of prime numbers less than a non-negative number, n.

// Input format
// Single line containing one integer N

// Output format
// Single line containing one number denoting the number of prime numbers less than N

// Sample Input 1
// 10

// Sample Output 1
// 4

// Explanation
// There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Constraints
// 1<=N=100000


//tc=n, sc = n
function countPrimes(n) {
    // using sieve of eratosthenes
    // which means, to cut every multiple till its square, except for oneself

    let sieve = new Array(n).fill(true)
    sieve[0] = false
    sieve[1] = false

    //cut all multiples smaller than n, except fot the number themselves
    for (let number = 2; number < n; number++) {
        for (let i = 2; i <= number; i++) {
            if (number * i <= n) {
                sieve[number * i] = false
            }
        }
    }

    //find count of prime numbers
    let count = 0
    for(let prime of sieve){
        if(prime){
            count++
        }
    }

    return count
}

let n = 10
let result = countPrimes(n);
console.log(result);