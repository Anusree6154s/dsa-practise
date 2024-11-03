// Problem Description
// Daily Transactions including debit and credit of a person are given. Find the largest set of consecutive transactions where credit equals debit. If there are more than one set of transactions, return the one which happened earlier.

// If there is no such transaction set, return -1.

// Input format
// There are 2 lines of input.

// First line contains an integer N denoting number of transactions

// Next line consists of N integers, denoting the transactions.

// Output format
// Return the largest set of consecutive transactions where credit equals debit.

// Sample Input 1
// 5

// 2 3 1 -4 6

// Sample Output 1
// 3 1 -4

// Explanation
// The largest set of consecutive transactions where credit equals debit is (3, 1, -4).

// Constraints
// 1 <= N <= 10^5

// -10^4 <= arr[i] <= 10^4

function dailyTransactions(N, transactions) {
    let sum = 0;
  let maxLength = 0;
  let startIndex = -1;
  let endIndex = -1;
  const sumIndexMap = new Map();

  sumIndexMap.set(0, -1); // Initialize with sum 0 at index -1

  for (let i = 0; i < N; i++) {
      sum += transactions[i];

      if (sumIndexMap.has(sum)) {
          let prevIndex = sumIndexMap.get(sum);
          let length = i - prevIndex;
          if (length > maxLength) {
              maxLength = length;
              startIndex = prevIndex + 1;
              endIndex = i;
          }
      } else {
          sumIndexMap.set(sum, i);
      }
  }

  if (maxLength > 0) {
      return transactions.slice(startIndex, endIndex + 1);
  } else {
      return [-1];
  }

  
}