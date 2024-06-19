// Problem Description
// Given a singly linked list containing N integers, sort it in O(NlogN) time.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list-

// Output format
// Return the head of the sorted list.

// Function definition
// You have to implement the given function. It accepts the head of the LL as an argument. You have to return the new head of the sorted list after sorting it

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 4

// 4 2 1 3

// Sample Output 1
// 1 2 3 4

// Explanation 1
// This is the sorted output.

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function sortList(head) {
    //using merge sort to sort it in nlogn time

    //MERGE SORT - GENERAL FORMULA
    //     function mergeSort(arr):
    //     if length(arr) ≤ 1:
    //         return arr

    //     // Divide
    //     mid = length(arr) / 2
    //     leftHalf = arr[0:mid]
    //     rightHalf = arr[mid:length(arr)]

    //     // Conquer - call mergeSort for each half
    //     leftSorted = mergeSort(leftHalf)
    //     rightSorted = mergeSort(rightHalf)

    //     // Combine - here is where we merge by sorting
    //     return merge(leftSorted, rightSorted)

    // function merge(left, right):
    //     result = []
    //     while left is not empty and right is not empty:
    //         if left[0] ≤ right[0]:
    //             append left[0] to result
    //             remove left[0] from left
    //         else:
    //             append right[0] to result
    //             remove right[0] from right

    //     while left is not empty:
    //         append left[0] to result
    //         remove left[0] from left

    //     while right is not empty:
    //         append right[0] to result
    //         remove right[0] from right

    //     return result

    //tc=nlogn sc=O(N)
    function mergeSort(head) {
        if (!head || !head.next) return head //edgecase

        //divide
        //to find mid: tortoise -hare algo (but for singly linked list)
        let prev = null //to track node before slow to cut the list
        let slow = head
        let fast = head
        while (fast  && fast.next) {
            prev = slow
            if (slow) slow = slow.next
            if (fast && fast.next) fast = fast.next.next
        }

        prev.next = null //cut the right list
        let leftHalf = head
        let rightHalf = slow

        //conquor - call mergesort for left and right
        let sortedLeft = mergeSort(leftHalf)
        let sortedRight = mergeSort(rightHalf)

        function merge(left, right) {
            let dummy = new ListNode(0); // Create a dummy node to simplify the merge process
            let current = dummy;

            while (left && right) {
                if (left.val <= right.val) {
                    current.next = left;
                    left = left.next;
                } else {
                    current.next = right;
                    right = right.next;
                }
                current = current.next;
            }

            // Append any remaining nodes
            if (left) {
                current.next = left;
            } else if (right) {
                current.next = right;
            }

            return dummy.next;
        }

        return merge(sortedLeft, sortedRight)

    }

    return mergeSort(head)

}


//create ListNode
function createListNode() {
   

    let arr = [4, 3, 2, 7, 5 , 1]
    let head = new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }

    return head
}


//test code
let head = createListNode()
let ans = sortList(head)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
