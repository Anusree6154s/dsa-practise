// Problem Description
// Given a linked list and an integer X, partition the LL around X, such that all nodes less than X come before all nodes greater than X. If X is contained within the list, then those nodes need

// to be after the elements less than X and before the elements greater than X, i.e. they should appear between the left and right partitions.


// You can also see if you can preserve the order for elements on either side of the partition. For instance, for given LL 2, 6, 5, 7, 1 and X = 5, the answer should be 2, 1, 5, 6, 7 only, instead of 1, 2, 5, 6, 7.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// X - An integer denoting the value that you must use to partition the given list

// Output format
// Return the head after partitioning the list

// Constraints
// 1 <= N <= 10^5

// -10^9 <= value, X <= 10^9

// Sample Input 1
// 7

// 3 5 8 5 10 2 1

// 5

// Sample Output 1
// 3 2 1 5 5 8 10

// Explanation 1
// The nodes [3], [1] and [2] are less than [5] so they are present before [8] and [10].

// There are also other possible answers for the same input.

// Sample Input 2
// 5

// 3 1 3 1 4

// 2

// Sample Output 2
// 1 1 4 3 3

// Explanation 2
// All nodes with values less than 2 come before all nodes with values greater than 2.

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

//tc=O(N), sc=O(1)
function partition(head, x) {
    // use three extra dummy ListNodes and make it simpler 
    //merging is simpler with dummy ListNodes

    let lesser = new ListNode()
    let equal = new ListNode()
    let greater = new ListNode()

    let lesserHead = lesser
    let equalHead = equal
    let greaterHead = greater

    let curr = head
    while (curr !== null) {
        if (curr.val < x) {
            lesser.next = curr
            lesser = lesser.next
        } else if (curr.val > x) {
            greater.next = curr
            greater = greater.next
        } else {
            equal.next = curr
            equal = equal.next
        }
        curr = curr.next
    }

    lesser.next = equalHead.next
    equal.next = greaterHead.next
    greater.next = null //required to cut any trailing nodes to avoid circular LL

    return lesserHead.next

}


//create ListNode
function createListNode() {


    let input = '3 5 8 5 10 2 1'
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
let ans = partition(head, 5)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
