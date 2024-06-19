// Problem Description
// Given a singly linked list, find the middle node of the linked list and move that node to the head of the list. Return the head of the list. In the case of a list with an even number of nodes, use the second middle one.

// Input format
// There are 2 lines of input

// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// Output format
// Return the head of the modified list after moving the middle node to head.

// Constraints
// 0 <= N<= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 6

// 2 3 4 5 6 7

// Sample Output 1
// 5 2 3 4 6 7

// Explanation 1
// The middle node here is [5]. Moving that to the head of the list gives us the output shown.

// Sample Input 2
// 5

// 1 2 3 4 5

// Sample Output 2
// 3 1 2 4 5

// Explanation 2
// The middle node here is [3]. Moving that to the head of the list gives us the output shown.

//tc=O(N), sc=O(1) -> no new ListNode created
function moveMiddleToHead(head) {
    //to find middle: using 2  pointers of diff speed to find the middle pointer
    // to bring middle to front: use 3 pointers - prev(for the one before middle), middle, current

    let current = head
    let middle = head
    let prev = null
    while (current !== null) {
        current = current.next.next
        prev = middle
        middle = middle.next
    }

    prev.next = middle.next
    middle.next = head

    return middle
}


//create ListNode
function createListNode() {
    class ListNode {
        constructor(val) {
            this.val = val
            this.next = null
        }
    }

    let input = '5 2 3 4 6 7'
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
let ans = moveMiddleToHead(head)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
