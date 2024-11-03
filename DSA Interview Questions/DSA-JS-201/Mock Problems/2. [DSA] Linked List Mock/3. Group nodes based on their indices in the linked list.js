// Problem Description
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// Input format
// First line contains an integer N - Number of nodes in the linked list.

// Second line contains N integers representing the linked list.

// Output format
// Return the head of the reordered linked list.

// Sample Input 1
// 5

// 1 5 3 4 8

// Sample Output 1
// 1 3 8 5 4

// Explanation
// Arranging the odd nodes first i.e. 1st, 3rd, 5th node and then the even nodes i.e. 2nd, 4th will give us 1, 3, 8, 5, 4.

// Constraints
// 0 <= N <= 10^5

// -10^9 <= Value of node <= 10^9

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function oddEvenLinkedList(head) {
    //using 2 new list node to group od and even indices
    //using a flag to track alternate indicces
    //indices sstart from 1

    let even = false
    let evenList = new ListNode()
    let oddList = new ListNode()
    let evenHead = evenList
    let oddHead = oddList

    while (head) {
        if (even) {
            evenList.next = head
            evenList = evenList.next
        } else {
            oddList.next = head
            oddList = oddList.next
        }
        head = head.next
        even = !even
    }
    oddList.next = evenHead.next
    evenList.next = null
    return oddHead.next
}



let head = new ListNode(1)
head.next = new ListNode(5)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(8)

//test code
let ans = oddEvenLinkedList(head)
// console.log(ans)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
