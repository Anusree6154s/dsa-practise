// Problem Description
// Rohan is a guy who has N different types of books. Given an integer array which represents the selling price of each type of book. He has an infinite supply of each type of book. Rohan wants to buy a movie ticket, which has a cost of K dollars. Since he has got no money, he decided to sell some of his books. Print the minimum number of books he needs to sell to get exactly K dollars. If the exact amount of money cannot be made by any combination of the books print -1.

// Note: He needs exactly K dollars, not more than that.

// Input format
// First line contains an integer.(Number of types of books)

// Second line contains n space separated integers.(Selling price of each type of book)

// Third line contains an integer.(Cost of the movie ticket)

// Output format
// An integer.

// Sample Input 1
// 3

// 1 2 5

// 11

// Sample Output 1
// 3

// Explanation
// 11= 5 + 5 + 1.

// He needs to sell three of his books to get the exact amount.

// Sample Input 2
// 1

// 2

// 3

// Sample Output 2
// -1

// Explanation
// The exact amount cannot be made by any combinations.

// Constraints
// 1 <= books.length <= 12

// 1 <= books[i] <= (2^31) - 1

// 0 <= Cost of movie ticket <= 10000


function movieTicket(n, book, amount) {
    // Initialize the DP array with a large value (infinity)
    const dp = new Array(amount + 1).fill(Infinity);

    // Base case: No books needed to make 0 dollars
    dp[0] = 0;

    // Update the DP array
    for (let i = 0; i < n; i++) {
        for (let j = book[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - book[i]] + 1);
        }
    }

    // Check the result for the desired amount
    return dp[amount] === Infinity ? -1 : dp[amount];
}