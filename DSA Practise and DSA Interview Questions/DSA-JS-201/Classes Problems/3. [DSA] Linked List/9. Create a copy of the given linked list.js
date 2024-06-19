// Problem Description
// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list i.e. the head of the copied linked list.

// The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// The original list should be restored if modified.

// Input format:
// Next line contains X space separated integers, elements of the linked list.

// Next line contains X space separated integers, random pointers of each node in the linked list.

// Output format
// Return a deep copy of the list i.e. the head of the copied linked list.

// Sample Input 1
// 10 20

// 2 2

// Sample Output 1
// 10 20

// 20 20

// Explanation 1
// ========================

// View of the Linked list

// ========================

// {10.next} -> {20}

// and

// {20.next} -> {null}

// {10.random} -> {20}

// and

// {20.random} -> {20}

// Constraints
// 3 <= K <= N <= 105

// |A[i]| <= 109

//ListNode
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.random = null
    }
}

//tc=O(N), sc=O(N)
function copyLinkedListWithRandomPointer(head) {
    //for deep copy create a new list
    // to find the simialr random nodes in the second list: (the only common thing between original and duplicate LL is the random node VALUES)
        // 1. first we map random node values as key and any value as value of original LL
        //2. then we map normal node values as key and normal nodes as value using duplicate LL 


    let newHead = null
    let newCurr = null
    let curr = head

    //to copy nodes in line
    while (curr !== null) {
        if (!newHead) {
            newHead = new ListNode(head.val)
            newCurr = newHead

        } else {
            newCurr.next = new ListNode(curr.val)
            newCurr = newCurr.next
        }
        curr = curr.next
    }

    console.log(newHead)



    //first map randon values to its LinkedList in original list
    let map = new Map()
    curr = head
    while (curr !== null) {
        if (curr.random) map.set(curr.random.val, 1)
        curr = curr.next
    }

    //now replace the values in map with those of duplicate random linked list
    newCurr = newHead
    while (newCurr !== null) {
        if (map.has(newCurr.val)) map.set(newCurr.val, newCurr)
        newCurr = newCurr.next
    }

    //now copy random values to the duplicate
    curr = head
    newCurr = newHead
    while (curr !== null) {
        if (curr.random) newCurr.random = map.get(curr.random.val)
        curr = curr.next
        newCurr = newCurr.next
    }

    return newHead

}



//create ListNode -(with random)
function createListNode() {

    let input = '3 5 8 5 10 2 1'
    let arr = input.split(' ').map(Number)

    let ran1, ran2, ran3, ran4
    let head = new ListNode(arr[0])
    head.next = new ListNode(arr[1])
    head.next.next = new ListNode(arr[2])
    head.next.next.next = new ListNode(arr[3])
    head.next.next.next.next = new ListNode(arr[4])
    head.next.next.next.next.next = new ListNode(arr[5])
    head.next.next.next.next.next.next = new ListNode(arr[6])

    ran1 = head.next
    ran2 = head.next.next.next
    ran3 = head.next.next.next.next.next
    ran4 = head.next.next.next.next.next.next

    head.random = ran1
    head.next.next.random = ran4
    head.next.next.next.next.next.random = ran2
    head.next.random = ran3

    return head
}


//test code - Singly LinkedList
let head = createListNode()
console.log(head)
let ans = copyLinkedListWithRandomPointer(head)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
