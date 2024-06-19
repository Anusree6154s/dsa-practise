// Problem Description
// Given the elements of a linked list, reverse it.


// You’ll have to implement the given method, which has the original list’s head pointer as an argument, and return the head of the updated list.

// Input format
// There are two lines of input.

// First line contains N, the number of elements in the linked list.

// Second line contains N space separated integers.

// Output format
// Only line contains N space separated integers

// Sample Input 1
// 5

// 1 2 3 4 5

// Sample Output 1
// 5 4 3 2 1

// Explanation 1
// 1->2->3->4->5->NULL

// 5->4->3->2->1->NULL

// Constraints
// 0 <= N <= 10^5

// -10^9 <= A[i] <= 10^9

//tc=O(N), sc=O(1)
function reverseLinkedList(head) {
    //for reversing:
    //1. first define- prev, current, next
    //2. flip current.next. update prev and next
    //next pointer only acts as a pointer to not lose the trailing ListNode

    let prev = null
    let current = head
    let next = head.next
    while (current !== null) {
        current.next = prev
        prev = current
        current = next
        if (next) next = next.next
    }

    return prev
}

//create ListNode
function createListNode() {
    class ListNode {
        constructor(val) {
            this.val = val
            this.next = null
        }
    }

    let arr = [1, 2, 3, 4, 5]
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
let ans = reverseLinkedList(head)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
