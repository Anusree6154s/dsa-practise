// Problem Description
// You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the highest order digit is at the head of the list.

// Write a function that adds the two numbers and returns the sum as a linked list.

// Input format:
// First line contains N, number of elements in the first linked list.

// Next line contains N space separated integers, elements of that linked list.

// First line contains M, number of elements in the second linked list.

// Next line contains M space separated integers, elements of that linked list.

// Output format
// Print the sum of the given numbers.

// Sample Input 1
// 3

// 7 1 6

// 3

// 5 9 2

// Sample Output 1
// 2 1 9

// Explanation
// 617 + 295 = 912

//create ListNode
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function sumLists1(head1, head2) {

    function reverseNumber(head) {
        let prev = null
        let curr = head
        while (curr !== null) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }

    head1 = reverseNumber(head1)
    head2 = reverseNumber(head2)

    let carry = 0
    let dummy = new ListNode()
    let curr = dummy
    while (head1 || head2 || carry) {
        let val1 = head1 ? head1.val : 0
        let val2 = head2 ? head2.val : 0

        let sum = (val1 + val2 + carry) % 10
        carry = Math.floor((val1 + val2 + carry) / 10)

        curr.next = new ListNode(sum + carry)
        if(head1)head1 = head1.next
        if(head2)head2 = head2.next
        curr = curr.next
    }
    return reverseNumber(dummy.next)
}



let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(3)

let head2 = new ListNode(3)
head2.next = new ListNode(2)
head2.next.next = new ListNode(6)
head2.next.next.next = new ListNode(3)
head2.next.next.next.next = new ListNode(9)

//test code
let ans = sumLists1(head, head2)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
