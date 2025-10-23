// 061. rotate-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // return head if k is 0 or no head/head.next
    if (!head || !head.next || k === 0) return head;

    // get list length
    let listLen = 0
    let curr = head
    while (curr) {
        curr = curr.next
        listLen++
    }

    // return if actual k is again 0
    k = k % listLen
    if (k == 0) return head


    // get actual position of curr for rotation
    let index = listLen - k - 1 // cause of 0 indexing
    curr = head
    while (index) {
        curr = curr.next
        index--
    }

    // rearrange tail and head
    let newHead = curr.next
    curr.next = null

    curr = newHead
    while (curr.next) {
        curr = curr.next
    }
    curr.next = head

    return newHead

};
