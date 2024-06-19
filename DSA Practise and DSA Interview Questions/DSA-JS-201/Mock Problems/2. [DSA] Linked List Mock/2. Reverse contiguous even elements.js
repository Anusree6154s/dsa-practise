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

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function reverseEvenElements(head) {
    if (!head) return head;

    //we will maintain a dumy in case the head get reversed while traversal
    let dummy = new ListNode(0)
    dummy.next = head
    let prev = dummy //when new head comes, prev.next will be new head
    let curr = head

    while (curr) {
        //if even numbers come reverse its head and tail
        //else traverse prev and next

        if (curr.val % 2 == 0) {
            let start = curr
            while (curr && curr.val % 2 == 0) {
                curr = curr.next
            }
            let end = curr

            let reversedHead = reverseList(start, end)
            // Attach the reversed sublist back to the main list
            prev.next = reversedHead
            start.next = end
            prev = start
        } else {
            prev = prev.next
            curr = curr.next
        }

    }

    function reverseList(start, end) {
        let prev = null
        let curr = head
        while (curr !== end) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }

    return dummy.next

}



let head = new ListNode(0)
head.next = new ListNode(2)
head.next.next = new ListNode(4)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(12)

let head2 = new ListNode(3)
head2.next = new ListNode(2)
head2.next.next = new ListNode(6)
head2.next.next.next = new ListNode(3)
head2.next.next.next.next = new ListNode(9)

//test code
let ans = reverseEvenElements(head)
console.log(ans)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
