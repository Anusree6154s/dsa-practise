// Problem Description
// Given a singly linked list of integers, reverse every contiguous set of nodes that have only even values.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// Output format
// Return the head of the modified list

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 8

// 1 2 3 3 4 6 8 5

// Sample Output 1
// 1 2 3 3 8 6 4 5

// Explanation 1
// There are two sublists of even elements, which [2] and [4->6->8]. The sublist [4->6->8] has been reversed and the single sublist [2] need not be reversed.

function reverseEvenElements(head) {}