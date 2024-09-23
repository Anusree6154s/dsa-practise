// Problem Description
// Given the elements of a linked list, reverse it.


// You’ll have to implement the given method, which has the original list’s head pointer as an argument, and return the head of the updated list.

// Input format
// There are two lines of input.

// First line contains N, the number of elements in the linked list.

// Second line contains N space separated integers.

// Output format
// Only line contains N space separated integers

// Sample Input 1
// 5

// 1 2 3 4 5

// Sample Output 1
// 5 4 3 2 1

// Explanation 1
// 1->2->3->4->5->NULL

// 5->4->3->2->1->NULL

// Constraints
// 0 <= N <= 10^5

// -10^9 <= A[i] <= 10^9

//tc=O(N), sc=O(1)
function reverseLinkedList(head) {
    //for reversing:
    //1. first define- prev, current, next
    //2. flip current.next. update prev and next
    //next pointer only acts as a pointer to not lose the trailing ListNode

    // let prev = null
    // let current = head
    // let next = head.next
    // while (current !== null) {
    //     current.next = prev
    //     prev = current
    //     current = next
    //     if (next) next = next.next
    // }

    // return prev


    let dummy = new ListNode()
    let groupPrev = dummy //node before group

    while (true) {
        let kth = getKthNode(groupPrev, k) //get kth node
        if (!kth) break //incase group ends with lesser nodes
        let groupNext = kth.next //node after group

        let prev = groupNext //prev node should be null, but in our question it gets connected to th etail of list. connectthe tail
        let curr = groupPrev.next //curr node is dummy.next or node before group
        while (curr !== groupNext) {//now reverse everything between prev and curr
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        let next = groupPrev.next //temp variable to get new groupPrev (just before groupNext (basically first node of group))
        groupPrev.next = kth // connect the heads
        groupPrev = next //new groupPrev
    }

    function getKthNode(curr, k) {
        while (curr && k > 0) curr = curr.next, k--
        return curr
    }

    return dummy.next
}

//create ListNode
function createListNode() {
    class ListNode {
        constructor(val) {
            this.val = val
            this.next = null
        }
    }

    let arr = [1, 2, 3, 4, 5]
    let head = new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }

    return head


    
}


//test code
let head = createListNode()
let ans = reverseLinkedList(head)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
