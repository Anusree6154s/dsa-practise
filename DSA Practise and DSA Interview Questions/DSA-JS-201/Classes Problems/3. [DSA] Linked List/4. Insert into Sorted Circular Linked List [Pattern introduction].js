// Problem Description
// Given a pointer to a node in a sorted circular singly linked list( sorted in ascending order), write a function to insert a value K into the list such that the linked list still remains a sorted circular list.


// Note1: If the given pointer is null i.e. empty list, create a circular list with a new node and return the reference to the new node. Otherwise,return the initial input pointer given.


// Note2: The list could have duplicate values. You can insert the new value in any place which will keep the list sorted.

// Input Format
// First line contains N, the number of nodes in the linked list.

// The next line contains N space-separated integers, representing the nodes of the circular linked list.

// The last line contains a single integer K, denoting the value that is to be inserted.

// Output Format
// Return the original pointer given as an argument, after modifying the list by inserting the value. The output prints the modified linked list starting from the returned node.

// Constraints
// 0 <= N <= 10^5

// 0 <= value <= 10^9

// 0 <= K <= 10^9

// Sample Input 1
// 7

// 4 5 9 10 0 1 2

// 7

// Sample Output 1
// 4 5 7 9 10 0 1 2

// Explanation 1
// The input is a sorted circular linked list and the given pointer is a reference to node [4]. A new node with [7] has to be inserted between [5] and [9] for the list to remain sorted. Return node [4] which is the input pointer given.

// Sample Input 2
// 0

// 4

// Sample Output 2
// 4

// Explanation 2
// The input is a sorted circular linked list which is empty. Create a circular linked list with a new node [4] and return the new node.

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

//tc=O(N), sc=O(1)-> one one new ListNode created
function insertIntoSortedCircularList(head, insertVal) {
    //to insert a val: maintain 2 pointers prev and current
    //edge case return a circular list if head is null

    if (!head) {
        head = new ListNode(insertVal)
        head.next = head
        return head
    }

    let current = head.next
    let prev = head
    while (current !== head) {
        if (insertVal > prev.val && insertVal < current.val) {
            let newNode = new ListNode(insertVal)
            prev.next = newNode
            newNode.next = current

        }
        prev = prev.next
        current = current.next
    }

    return head
}



//create ListNode- circular linkedList
function createListNode() {
    let input = '4 5 9 10 0 1 2'
    let arr = input.split(' ').map(Number)
    let head = new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    current.next = head
    return head
}


//test code - circular linkedList
let head = createListNode()
let ans = insertIntoSortedCircularList(head, 7)
let current = ans.next
if (ans.next == ans) {
    ans.next = null
} else {
    while (current.next !== ans) {
        current = current.next
        if (current.next == ans) {
            current.next = null
            break
        }
    }
}
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
