// Problem Description
// In a lucky draw, every person is given a token. The winners are the people who draw the Xth smallest token value. Find the winner’s token value.

// Input format
// First line contains an integer N - Total number of persons participating in the lucky draw.

// Second line contains N integers - Token values.

// Third line contains the integer X.

// Output format
// Print the winner’s token value.

// Sample Input 1
// 5

// 8 5 3 8 5

// 3

// Sample Output 1
// 5

// Explanation
// The smallest token value is 3.

// The 2nd smallest token value is 5.

// The 3rd smallest token value is also 5.

// So the winners are all the people getting the token value as 5.

// Constraints
// 1 <= X <= N <= 10^5

// 0 <= array elements <= 10^9

function luckyDraw(n, tokens, x) {
    // Sort the token values in ascending order
      tokens.sort((a, b) => a - b);
      
      // Return the Xth smallest token value
      return tokens[x - 1]; // Since X is 1-based index
  }