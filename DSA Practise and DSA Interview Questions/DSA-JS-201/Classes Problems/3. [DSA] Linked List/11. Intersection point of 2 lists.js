// Problem Description
// There are 2 LLs, and they intersect at a node N, after which they merge into 1 list.

// Write a program to find the node at which the intersection of two singly linked lists begins.

// Note :

// If the two linked lists have no intersection at all, return null.

// The linked lists must retain their original structure after the function returns.

// You may assume there are no cycles anywhere in the entire linked structure.

// Your code should preferably run in O(M + N) time where M and N are the lengths of given lists and use only O(1) memory.

// Input format
// There are 6 lines of input.

// First line contains N - An integer denoting the number of elements before the intersection point in the first list.

// Next line contains N integers representing the node values of the first LL before the intersection point.

// Next line contains M - An integer denoting the number of elements before the intersection point in the second list.

// M integers follow where jth integer denotes the jth node value in the linked list.

// Next line contains P - An integer denoting the number of elements after the intersection point.

// Next line contains P integers - the node values after and including the intersection point of the LL.


// Note that the input accepts all these values, but you’ll have access only to the two heads, which you’ll have to make use of.

// Output format
// Return the intersection node of the lists.

// Function Definition
// You have to complete the given function. It accepts two arguments - the heads of each LL. You have to return a pointer to the intersection node of the two LLs.

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// 0 <= M <= 10^5

// -10^9 <= value <= 10^9

// 0 <= P <= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 3

// 3 1 7

// 2

// 2 6

// 3

// 9 15 7

// Sample Output 1
// 9

// Explanation 1
// image

// The value of the element at the intersection point of the two lists is 9.

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

//tc=O(M+N), sc=O(1)
function listIntersectionPoint(head1, head2) {
    // in the apprach here we will keep 2 pointers
    // we will keep iterating them through alternate lists until they happen to meet or until they both reach the end of the combined list
    // this is because when the restarting on oppist list occurs, teh pointer will iterate the same distacne as the difference in the length of lists

    //if list 1 is 6 units long, list2 is 4 units long and both meet at 4 unit 5th unit of list1 and 1st unit of list

    let pointer1 = head1
    let pointer2 = head2

    while (pointer1 !== pointer2) {
        pointer1 = pointer1 ? pointer1.next : head2
        pointer2 = pointer2 ? pointer2.next : head1
    }

    return pointer1


    //ALTERNATE APPROACH
    // //find length of list 1
    //   let current = head1
    //   let count1 = 0
    //   while (current) {
    //         current = current.next
    //         count1++
    //   }

    //   //find length of list 1
    //   current = head2
    //   let count2 = 0
    //   while (current) {
    //         current = current.next
    //         count2++
    //   }

    //   //find the difference and reduce the longer list size by diff
    //   let diff = Math.abs(count2 - count1)
    //   if (count2 > count1) {
    //         while (diff) {
    //               head2 = head2.next
    //               diff--
    //         }
    //   } else if (count1 > count2) {
    //         while (diff) {
    //               head1 = head1.next
    //               diff--
    //         }
    //   }

    //   // find the common node
    //   while (head1 !== head2) {
    //         head1 = head1.next
    //         head2 = head2.next
    //   }

    //   return head1
}


//create ListNode
function createListNode(input1, input2, rest) {
    let { head: head1, current: current1 } = list(input1)
    let { head: head2, current: current2 } = list(input2)
    let { head: head3, current: current3 } = list(rest)

    current1.next = head3
    current2.next = head3
    function list(input) {
        let arr = input.split(' ').map(Number)
        let head = new ListNode(arr[0])
        let current = head
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i])
            current = current.next
        }

        return { head, current }
    }
    return { head1, head2 }
}


//test code - Singly LinkedList
let { head1, head2 } = createListNode('3 1 7', '2 6', '9 15 7')
let ans = listIntersectionPoint(head1, head2)
while (ans != null) {
    console.log(ans.val)
    ans = ans.next
}
