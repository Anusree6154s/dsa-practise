// Problem Description
// Given 2 sorted linked lists, merge them into a new sorted linked list and return head of the merged list. The new list should be made by splicing (adjusting the pointers) together the nodes of the first two lists.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// M - An integer denoting the number of nodes in the linked list.

// M integers follow where jth integer denotes the jth node value in the linked list

// Output format
// Return the sorted list after splicing the nodes of the first two lists.

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// 0 <= M <= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 3

// 1 2 4

// 3

// 1 3 4

// Sample Output 1
// 1 1 2 3 4 4

// Explanation 1
// Merging the input lists and keeping the new list sorted results in this.

// Sample Input 2
// 4

// 1 5 7 6

// 1

// 3

// Sample Output 2
// 1 3 5 7 6

// Explanation 2
// Merging the input lists and keeping the new list sorted results in this.

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

//tc=O(l1+l2), sc=O(1)
function mergeTwoLists(l1, l2) {
    //please use extre space for dummy node. it makes things easier withot updating ans.val etc
    let dummy = new ListNode()
    let curr = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next
        } else if (l2.val < l1.val) {
            curr.next = l2
            l2 = l2.next
        } else {
            curr.next = l1
            l1 = l1.next
            curr = curr.next
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }

    //append remain l1
    if (l1) {
        curr.next = l1

    } else { //or remaining l2
        curr.next = l2
    }

    return dummy.next
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
let head1 = createListNode('1 2 4')
let head2 = createListNode('1 3 4')
let ans = mergeTwoLists(head1, head2)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
