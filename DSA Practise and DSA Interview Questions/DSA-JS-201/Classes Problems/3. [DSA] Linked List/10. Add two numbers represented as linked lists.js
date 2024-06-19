// Problem Description
// You’re given two numbers represented by two linked lists, where each node contains a single digit. The digits are stored in forward order i.e the one’s digit is at the tail of the list. Write a function that adds the two numbers and returns the sum as a linked list in the same order.

// Input format
// There are 4 lines of input.

// First line contains N, the size of the first list

// Next line contains N space separated integers

// Third line contains M, the size of the second list

// Next line contains M space separated integers

// Output format
// Return the resultant list after adding given lists.

// Function definition
// The given function accepts two arguments - representing the heads of the two lists,and returns the new head.

// Constraints
// 1 <= N <= 1e5

// 1 <= M <= 1e5

// 0 <= value <= 9

// Sample Input 1
// 3

// 6 1 7

// 3

// 2 9 5

// Sample Output 1
// 9 1 2

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


//tc=O(M+N), sc=O(1)-> for carry
function sumLists2(head1, head2) {
    //reverse both lists
    //seperate each node and sum
    //return the reversed answer

    head1 = reverse(head1)
    head2 = reverse(head2)

    let curr1 = head1
    let curr2 = head2
    let carry = 0, ans = null, ansHead = null
    while (curr1 || curr2 || carry) {
        let digit1 = curr1 ? curr1.val : 0
        let digit2 = curr2 ? curr2.val : 0

        let sum = (digit1 + digit2 + carry) % 10
        carry = Math.floor((digit1 + digit2 + carry) / 10)
        
        if (curr1 || curr2) ans = curr1 ?? curr2
        if (!ansHead) ansHead = ans
        ans.val = sum

        if (curr1) curr1 = curr1.next
        if (curr2) curr2 = curr2.next

        if (!ans.next && carry) ans.next = new ListNode()
        ans = ans.next

    }

    function reverse(head) {
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

    return reverse(ansHead)
}



//create ListNode
function createListNode(input) {


    let arr = input.split(' ').map(Number)
    let head = new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }

    return head
}


//test code - Singly LinkedList
let head1 = createListNode('6 1 7')
let head2 = createListNode('2 9 5')
let ans = sumLists2(head1, head2)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
