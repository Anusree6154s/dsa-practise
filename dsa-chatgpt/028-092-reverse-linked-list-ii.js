// 092. reverse-linked-list-ii

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    // dummy node to preserve new head
    let dummy = new ListNode()
    dummy.next = head

    // get node before left
    let beforeLeft = dummy
    for (let i = 1; i < left; i++) {
        beforeLeft = beforeLeft.next
    }

    // reverse sublist
    let prev = beforeLeft
    let curr = beforeLeft.next
    let leftNode = beforeLeft.next
    for (let i = 0; i < (right - left + 1); i++) {
        let next = curr.next
        curr.next = prev

        prev = curr
        curr = next
    }

    //join sublist tail to head
    beforeLeft.next = prev

    //join sublist head to tail
    leftNode.next = curr

    return dummy.next
};
