// 160. intersection-of-two-linked-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // then would iterset when they share 
    // the same node at one point

    let pA = headA
    let pB = headB

    while (pA !== pB) {
        pA = pA ? pA.next : headA
        pB = pB ? pB.next : headB
    }

    return pA
};
