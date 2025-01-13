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


//tc = nloglogn, sc = n
function countPrimes(n) {
    // using sieve of eratosthenes
    // which means, to cut every multiple till its square, except for oneself

    let sieve = new Array(n).fill(true)
    sieve[0] = false
    sieve[1] = false

    //cut all multiples smaller than n, except fot the number themselves
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (sieve[i]) { // Only proceed if i is prime
            for (let j = i*i; j < n; j=j+i) {
                sieve[j] = false
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

function countPrimes(n) {
  if (n <= 2) return 0; // No primes less than 2

  const sieve = new Array(n).fill(true); // Initialize all as true
  sieve[0] = sieve[1] = false; // 0 and 1 are not primes
  
  for (let i = 2; i * i < n; i++) {
    if (sieve[i]) { // If i is prime
      for (let j = i * i; j < n; j += i) {
        sieve[j] = false; // Mark multiples of i as non-prime
      }
    }
  }

  // Count remaining true values in the sieve
  return sieve.filter(isPrime => isPrime).length;
}

let n = 10
let result = countPrimes(n);
console.log(result);


// approach1 (OPTIMISED):
// sieve of erathosthenes - marking all numbers as true, and their multiples as false.
// 1. math concepts to understand before beginning 
//    - 0 and 1 are non primes
//    - we only have to check for the mutiples of numbers upto √n (if we are asked to find primes less than n) 
//        - because for any number that comes after √n, their mutiples will be greater than n (a pattern observed. just maths. so no need of checking)
//        - so any number after √n will either be already marked as multiple of numbers before √n or will be a new prime number
//    - for checking multiples, we only have to start checking for them after that number's square
//        - because of the similar concept explained above for √n
//        - suppose the number to find multiple is 3(√n) and its square is 9(n). we just have to start checking for multiple after 9
//        - because the numbers between √n(3) and n(9) will either be multiples of some numbers before √n(3) [like 6 is multiple of 2 though is 
//          it multple fof 3 too] or a totally new prime number. (so avoid rechecking)
// 2. understanding code: 
//    - initialise a boolean array with all marked to true (except 0 and 1). we will only mark multiples as false
//    - loop from i=2 to <√n
//    - for each i, 
//        - IF PRIME, mark its multiples from i² onwards false (j=i², i²+i, i²+i+i, ..) till n. 
//        - ELSE SKIP to next
//    - finally, count the indices marked true (they are indices of non-multiples)
//    - return count (they are count of primes)
// 3. example: 
//    - to find primes less than 18 (n=18)
//    - initialise boolean array 'bool' with true except for 0 and 1 
//       0  1  2  3  4  5  6  7  8  9 10  11 12 13 14 15 16 17
//      [F, F, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T]
//    - loop from i=2 to √n(√12≈ 4.24) . for each i, IF PRIME mark multiples starting from j=i². ELSE SKIP
//        - i=2, 2<4.24, bool[2] ==true (means prime) 
//            - j=i²=4, 4<n(18) ->                         [F, F, T, T, F, T, T, T, T, T, T, T, T, T, T, T, T, T]
//            - j=i²+i=4+2=6, 6<n(18) ->                   [F, F, T, T, F, T, F, T, T, T, T, T, T, T, T, T, T, T]
//            - j=i²+i+i =4+2+2=8, 8<n(18) ->              [F, F, T, T, F, T, F, T, F, T, T, T, T, T, T, T, T, T]
//            - j=i²+i+i+i =4+2+2+2=10, 10<n(18) ->        [F, F, T, T, F, T, F, T, F, T, F, T, T, T, T, T, T, T]
//            - ...rest till 18
//            - j=i²+i+i+..i =4+2+2+2..+2=18, 18!<n(18) -> end
//        - i=3, 3<4.24,  bool[3] ==true (means prime)
//            - j=i²=9, 9<n(18) ->                         [F, F, T, T, F, T, F, T, F, F, F, T, F, T, F, F, F, T]
//            - ...rest till 18
//            - j=i²+..i= 9+3+3..+3= 12, 18!<n(18) -> end
//        - i=4, 4<4.24,  bool[4] !=true (not prime) -> skip
//        - i=5, 5!<4.24 -> end
//    - FINAL ans = primes are 2, 3, 5 , 7, 11, 13, 17   
//             2  3     5     7          11    13          17
//      [F, F, T, T, F, T, F, T, F, F, F, T, F, T, F, F, F, T]
// 4. tc and sc:
//    - tc:
//        - loop1 from 2 to √n. 
//            - approx, 0 to √n (for simplicity). 
//            - so √n times. 
//            - ∴ loop1 tc =O(√n)
//        - loop2 from i² to n. 
//            - if n is very large, i²≈ i (for simplicity)
//            - so number of multiples of i from i to n will be n/i
//                - ex: multiples between i to n = x
//                     1*i, 2*i, 3*i, 4*i, ... n = x
//                         i*(1, 2, 3, 4, ... n) = x
//                           (1, 2, 3, 4, ... n) = x/i
//        - total tc = sum of n/i up to i= √n (excluding multiples)
//                   = n/2 + n/3 +n/5 +n/7  +... n/√n (excluding multiples like n/4, /6, n/8 etc) 
//                   = n ( 1/2 + 1/3 +1/5 +1/7  +... 1/√n)
//                   = n [ln(ln(√n))+ γ]       ∵  Prime Harmonic Sum formula: ∑ (1/p) for all primes p ≤ m ≈ ln(ln(m))+ γ (Euler-Mascheroni constant).
//                   = n [ln*1/2 (ln(n))+ γ]
//                   = n/2 log log(n) + nγ
//                   = O(n log log n)          [removing constants]
​//        - total sc = n (storing upto n boolean)
 
​
// approach (BRUTEFORCE)
// 1. concept: looping through each number till n and check if they are divisible by even 1 natural number (via another loop)
// 2. code:
//    - initialise an ans arr
//    - loop from i=2 to n
//    - for each i, loop from j= 2 to √i (only upto √i, beca)
//        - check divisiblitiy of i by j (means check if the curr i is a multiple or not)
//        - if divisible even by one return false (not prime)
//        - if entire loop not divisible or loop dont run, return true (is prime)
//    - if prime, push that number to ans arr
//    - return ans arr length (it is number of primes)
// 3. example: 
//    - to find primes less than 10 (n=10)
//    - loop from i=2 to 10, then for each i loop from 2 to √i
//        - i=2, 2<10
//            - j=2, j(2)!< √i (√2) return true. add to ans arr
//        - i=3, 3<10
//            - j=2, 2 !< √3 (≃1.73) return true. add to ans arr
//        - i=4, 4<10
//            - j=2, 2 <= √4 (=2), 4%2==0, return false
//        - i=5, 5<10
//            - j=2, 2 <= √5 (≃2.23), 5%2!=0, return true. add to ans arr
//        - ...rest of it till n
// 4. tc and sc:
//    - tc:
//        - loop1 from 2 to n. O(n)
//        - loop2 from 2 to √n. O(√n)
//        - total tc = O(n√n) = O( n^²⁄₂ * n^½ ) = O(n^³⁄₂)
//    - sc : O(n)

// Main function to find primes up to 'n'
function findPrimes(n) {
    let primesCount = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            primesCount++;  // Add prime numbers to the result array
        }
    }
    return primesCount;
}
function isPrime(i) {
    for (let j = 2; j <= Math.sqrt(i); j++) {  // Check divisibility from 2 to √num
        if (i % j === 0) return false;  // If divisible, it's not prime
    }
    return true;  // If no divisors found, it's prime
}


