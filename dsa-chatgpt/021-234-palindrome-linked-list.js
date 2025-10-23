// 234. palindrome-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // find middle of ll
    // reverse second half of ll
    // comapre first half with second half of ll

    // finding middle
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    //reverse second half
    let prev = null
    let curr = slow
    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    //compare first half and second half
    let p1 = head
    let p2 = prev
    while (p2) {
        if (p1.val !== p2.val) return false
        p1 = p1.next
        p2 = p2.next
    }

    return true
};
