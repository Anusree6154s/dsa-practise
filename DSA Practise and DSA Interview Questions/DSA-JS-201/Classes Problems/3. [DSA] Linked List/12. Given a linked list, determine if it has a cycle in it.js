// Problem Description
// Given a linked list, determine if it has a cycle in it.


// A linked list cycle means that for last node of LL, called last, last->next is not NULL, but instead points to some other node of the LL(not last itself)


// Internally, to represent a cycle in the given linked list, we use an integer pos which represents the zero-indexed position of the node that the last node of the LL is connected to. If pos = -1, it means that there is no cycle in the LL. Note that pos is not passed as a parameter.


// For instance, consider an LL 1->2->3->4 and pos = 1. This means that there is a cycle such that 4 is connected to the node at position 1, that is, the node with value 2.

// Input format:
// There are 2 lines of input.

// First line contains space separated integers, denoting the elements of the linked list.

// The next line contains one integer - pos, the position that the tail connects to.

// Output format
// Print "true" without quotes if it has a cycle in it else “false”.

// Function definition
// You have to complete the given function. It accepts a single argument, the head of the LL, and returns a boolean value - true if there’s a cycle, false if not. You will NOT have access to the variable pos in the function.

// Sample Input 1
// 3 2 0 -4

// 1

// Sample Output 1
// true

// Explanation 1
// image

// There is a cycle in the linked list, where tail connects to the second node.
// Sample Input 2
// 1
// -1

// Sample Output 2
// true

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

//tc=O(N), sc=O(1)
function linkedListCycle(head) {
    // Floyd's Cycle Detection Algorithm  (Tortoise and Hare algorithm)
    //well run 2 pointers: slow and fast
    //is there is a cycle, slow and fast will meet. and return true

    //edge case-> if fast.next doesnt exist, return false
    //edge case -> if head or head.next dont exist


    
    if (!head || !head.next) {
        return false;
  }
    let slow = head
    let fast = head.next //we start from head.next instead of head so that we dont miss a cycle if it begins immdiately after head (head pointing to head -> so head=head.next)

    while (slow !== fast) {
        if(!fast || !fast.next) return false
        slow = slow.next
        fast = fast.next.next
    }

    return true
}

//create ListNode
function createListNode() {
    class ListNode {
        constructor(val) {
            this.val = val
            this.next = null
        }
    }
    // 3 2 0 -4
    let head = new ListNode(3)
    head.next = new ListNode(2)
    let pointer = head.next
    head.next.next = new ListNode(0)
    head.next.next.next = new ListNode(-4)
    head.next.next.next.next = pointer
    return head
}


//test code - Singly LinkedList
let head = createListNode()
let ans = linkedListCycle(head)
console.log(ans)