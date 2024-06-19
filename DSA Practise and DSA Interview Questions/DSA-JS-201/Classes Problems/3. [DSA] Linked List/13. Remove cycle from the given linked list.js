// Problem Description
// Given only the head of a linked list, check whether the linked list contains a cycle or not. If the linked list does not contain a cycle, return false, otherwise remove the cycle and return true.

// Assume that cycle doesn't start on the head node.

// Assume 0-based indexing.

// Input format
// First line contains an integer N - Number of nodes in the linked list.

// Second line contains N integers representing the linked list.

// Third line contains one integer K - The index to which the tail connects to, i.e, the start of the cycle (-1 in case of no cycle).

// Output format
// Return true or false depending on whether the linked list contains cycle or not. If the answer is true modify the linked list and remove the cycle.

// Sample Input 1
// 5

// 1 2 3 4 5

// 2

// Sample Output 1
// true

// 1 2 3 4 5

// Explanation
// Visualization:

// image

// After removing cycle: The figure above indicates a cycle starting from node 3 and ending at node 3, the link starting at 5 and ending at 3 is indicative of that. After removing the cycle the linked list will be of the form 1-->2-->3-->4-->5-->NULL.

//tc=O(N), sc=O(N)
function detectAndRemoveCycle(head) {
    if (!head || !head.next) return false //edgecase

    //to check: floyds cycle detection algoritthm 
    let slow = head
    let fast = head.next
    while (slow !== fast) {
        if (!fast || !fast.next) return null
        slow = slow.next
        fast = fast.next.next
    }

    //to remove, mapping each node, and see if any node repeats
    let map = new Map()
    let curr = head
    while (curr !== null) {
        if (map.has(curr)) return curr
        map.set(curr, 1)
        curr = curr.next
    }

    //ALETRNATE APPROACH
    // it works on the priciple of floyds cycle detection algorithm. acc to that in a cycle:
    // 1. when running two pointers, one from start and other from start.next (slow and fast pointer), they will meet at one point
    // 2. when running two pointers, one from start other from prev meeting point, they will meet again but at the start of the cycle/intersection

    // let slow = head.next;
    // let fast = head.next.next;
    
    // // Step 1: Detect if there's a cycle
    // while (fast && fast.next && slow !== fast) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }
    
    // if (!fast || !fast.next) {
    //     // No cycle found
    //     return false;
    // }
    
    // // Step 2: Find the start of the cycle
    // let cycleStart = head;
    // while (cycleStart !== slow) {
    //     cycleStart = cycleStart.next;
    //     slow = slow.next;
    // }
    
    
    // // Step 3: Remove the cycle
    // let prev = null;
    // let current = head;
    // while (current !== cycleStart) {
    //     prev = current;
    //     current = current.next;
    // }
    
    // // Break the cycle
    // prev.next = null;
    
    // return current;
}


//create ListNode
function createListNode() {
    class ListNode {
        constructor(val) {
            this.val = val
            this.next = null
        }
    }
    // 1 2 3 4 5
    let head = new ListNode(1)
    head.next = new ListNode(2)
    let pointer = head.next
    head.next.next = new ListNode(3)
    head.next.next.next = new ListNode(4)
    head.next.next.next.next = new ListNode(5)
    head.next.next.next.next.next = pointer
    return head
}


//test code - Singly LinkedList
let head = createListNode()
let ans = detectAndRemoveCycle(head)
console.log(ans)