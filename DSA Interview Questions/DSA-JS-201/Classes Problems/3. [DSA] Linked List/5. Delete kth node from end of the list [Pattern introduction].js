// Problem Description
// Given a linked list, remove the Kth node from the end of the list and return its head.

// Note: the given K will always be a valid node.

// Input format
// There are three lines of input

// First line contains N, the number of nodes in the linked list

// Second line contains N integers, denoting the values of the linked list

// Third line contains K, the node to be deleted from the end.

// Output format
// Return the head of the LL after deleting the Kth node from the end.

// Function definition
// You have to complete the given function. It accepts two arguments - the head of the linked list, and k. You have to return the head of the LL after making the necessary change.

// Constraints
// 1 <= N<= 10^5

// -10^9 <= value <= 10^9

// 1 <= K <= N

// Sample Input 1
// 5

// 1 5 2 4 3

// 2

// Sample Output 1
// 1 5 2 3

// Explanation 1
// The 2nd node from the end is 4, removing which, gives us 1 5 2 3

// Sample Input 2
// 5

// 3 1 3 2 4

// 4

// Sample Output 2
// 3 3 2 4

// Explanation 2
// The 4th node from the end is 1, removing which, gives us 3 3 2 4

//tc=O(N), sc=O(1)
function deleteKthToLast(head, k) {
    //to find kth element from end, use 2 pointers:
    //suppose the starting position of 1st pointer is on 4th node and 2nd pointer on 1st node
    //the distance between them is of 4 nodes
    // so if moved together, when 1st pointer is at last node, 2nd pointer is at the 4th node from end

    // to remove any element use 2 pointers: prev and current

    // so in total we use 3 pointers

    let p1 = head
    let p2 = head
    let prev = null

    //set starting position of 1st pointer
    for (let i = 1; i < k; i++) {
        p1 = p1.next
    }

    //move both pointers together to find kth node from end
    while (p1.next !== null) {
        p1 = p1.next
        prev = p2
        p2 = p2.next
    }

    //now remove
    prev.next = p2.next

    return head
}


//create ListNode
function createListNode() {
    class ListNode {
        constructor(val) {
            this.val = val
            this.next = null
        }
    }

    let input = '1 5 2 4 3'
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
let head = createListNode()
let ans = deleteKthToLast(head, 2)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
