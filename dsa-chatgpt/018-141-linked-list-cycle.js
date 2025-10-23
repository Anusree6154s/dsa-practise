// 141. linked-list-cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head
    let fast = head

    // if there is cycle slow will meet fast. else fast will end
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            return true
        }
    }

    return false
};
