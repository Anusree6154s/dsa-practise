// Problem Description
// N friends attended a birthday party. Their ages are specified in the array and they are arranged in the order of arrival. For each of the people, find the next younger person who arrived after them. If there is no younger person, return -1.

// Input format
// There are 2 lines of input:

// The first line contains an integer N denoting the number of friends.

// The second line contains N space separated positive integers denoting the ages of friends arranged in order of arrival in the array A.

// Output format
// Print N space separated integers, which are the next younger person for each person who attended the party. If no such person exists, output -1.

// Sample Input 1
// 5

// 8 2 5 10 4

// Sample Output 1
// 2 -1 4 4 -1

// Explanation
// For 8, person with age 2 arrived after him.

// For 5 and 10, person with age 4 arrived after him.

// For all other people, no younger person arrived after them.

// Constraints
// 1 <= N <= 10^5

// 0 < Values in the array <= 10^9

function birthdayParty(N, ages) {
    let result = new Array(N).fill(-1);
   let stack = [];

   // Traverse the array from end to start
   for (let i = N - 1; i >= 0; i--) {
       // Remove all elements from stack that are not younger than the current age
       while (stack.length > 0 && stack[stack.length - 1] >= ages[i]) {
           stack.pop();
       }

       // If stack is not empty, the top of the stack is the next younger age
       if (stack.length > 0) {
           result[i] = stack[stack.length - 1];
       }

       // Push the current age onto the stack
       stack.push(ages[i]);
   }

   return result;
}